import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import CompanhiaInfo from '../../../../../Domain/CompanhiaInfo';
import moment, { Moment } from 'moment';
import CompanhiasInfoStore from '../../../../../Store/companhiasInfoStore';
import { Filters, WidthDatePicker, WidthInput } from '../style';

const columns = [
  {
    title: 'CNPJ',
    dataIndex: 'cnpj',
    key: 'cnpj',
  },
  {
    title: 'Denom. Social',
    dataIndex: 'denomSocial',
    key: 'denomSocial',
  },
  {
    title: 'Data Registro',
    dataIndex: 'dataRegistro',
    key: 'dataRegistro',
    render: ((date: Moment) => date.format("DD-MM-YYYY"))
  },
  {
    title: 'Setor',
    dataIndex: 'setorAtividade',
    key: 'setorAtividade',
  },
  {
    title: 'Controle Acionário',
    dataIndex: 'controleAcionario',
    key: 'controleAcionario',
  },
  {
    title: 'Denom. Comércio',
    dataIndex: 'denomComercio',
    key: 'denomComercio',
  },
];


type Props = {
  setSelectedCompanhia(companhia: CompanhiaInfo): void
}
function CompanhiasInfoTable({ setSelectedCompanhia }: Props) {

  const data = CompanhiasInfoStore.listen().companhiasInfo
  const [dataSource, setDataSource] = useState<CompanhiaInfo[]>([])
  const [year, setYear] = useState<number | undefined>()
  const [cnpj, setCnpj] = useState<string | undefined>()

  useEffect(() => { setDataSource([...data]) }, [data])

  const handleCNPJ = (value: any) => {
    setCnpj(value.currentTarget.value)
    filterData({ cnpj: value.currentTarget.value })
  }

  const [nome,setNome] = useState<string | undefined>()
  const handleNome = (value: any) => {
    setNome(value.currentTarget.value)
    filterData({ nome: value.currentTarget.value })
  }

  const handleYear = (value: Moment | null) => {
    setYear(value?.year())
    filterData({ year: value?.year() })
  }

  const filterData = ({ year, cnpj,nome }: any) => {
    var newData = data
    if (cnpj)
      newData = newData.filter(v => v.cnpj.includes(cnpj))
    if (year)
      newData = newData.filter(v => v.dataRegistro.year() === year)
    if(nome)
    newData = newData.filter(v => v.denomComercio.includes(nome))


    setDataSource([...newData])
  }

  return (
    <div>
      <Filters>
        <WidthInput placeholder="Filter by CNPJ" onChange={handleCNPJ}></WidthInput>
        <WidthInput placeholder="Filter by Name" onChange={handleNome}></WidthInput>
        <WidthDatePicker placeholder="Filter by Year" onChange={handleYear} picker="year" />
      </Filters>
      <Table dataSource={dataSource} columns={columns} onRow={(record, rowIndex) => {
        return {
          onClick: _event => { setSelectedCompanhia(record) },
        };
      }} />
    </div>

  )
}

export default CompanhiasInfoTable