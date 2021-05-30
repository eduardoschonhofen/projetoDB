import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import FundoInfo from '../../../../../Domain/FundoInfo';
import moment, { Moment } from 'moment';
import FundosInfoStore from '../../../../../Store/fundosInfoStore';
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
    title: 'Administrador',
    dataIndex: 'admin',
    key: 'admin',
  },
  {
    title: 'Gestor',
    dataIndex: 'gestor',
    key: 'gestor',
  },
];


type Props = {
  setSelectedFundo(fundo: FundoInfo): void
}
function FundosInfoTable({ setSelectedFundo }: Props) {

  const data = FundosInfoStore.listen().fundosInfo

  const [dataSource, setDataSource] = useState<FundoInfo[]>([])
  const [year, setYear] = useState<number | undefined>()
  const [cnpj, setCnpj] = useState<string | undefined>()
  const [nome, setNome] = useState<string | undefined>()


  useEffect(() => { setDataSource([...data]) }, [data])

  const handleCNPJ = (value: any) => {
    setCnpj(value.currentTarget.value)
    filterData({ cnpj: value.currentTarget.value })
  }

  const handleYear = (value: Moment | null) => {
    setYear(value?.year())
    filterData({ year: value?.year() })
  }

  const handleNome = (value: any) => {
    setNome(value.currentTarget.value)
    filterData({ nome: value.currentTarget.value })
  }

  const filterData = ({ year, cnpj, nome }: any) => {
    var newData = data
    if (cnpj)
      newData = newData.filter(v => v.cnpj.includes(cnpj))
    if (year)
      newData = newData.filter(v => v.dataRegistro.year() === year)
    if (nome)
      newData = newData.filter(v => v.denomSocial.includes(nome))

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
          onDoubleClick: _event => { setSelectedFundo(record) },
        };
      }} />
    </div>

  )
}

export default FundosInfoTable