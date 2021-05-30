import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import FundoInfo from '../../../../../Domain/FundoInfo';
import moment, { Moment } from 'moment';
import FundosInfoStore from '../../../../../Store/fundosInfoStore';
import FundoComposition from '../../../../../Domain/FundoComposition';
import { Filters, WidthDatePicker, WidthInput } from '../style';

const columns = [
  {
    title: 'Código',
    dataIndex: 'codigoAtivo',
    key: 'codigoAtivo',
    fixed: "left" as "left",

  },
  {
    title: 'CNPJ',
    dataIndex: 'cnpj',
    key: 'cnpj',
  },
  {
    title: 'Tipo Aplicação',
    dataIndex: 'tipoAplicacao',
    key: 'tipoAplicacao',
  },
  {
    title: 'Tipo Ativo',
    dataIndex: 'tipoAtivo',
    key: 'tipoAtivo',
  },
  {
    title: 'Quantidade Venda',
    dataIndex: 'quantidadeVenda',
    key: 'quantidadeVenda',
    render: ((value: number) => (new Intl.NumberFormat()).format(value))

  },
  {
    title: 'Valor Venda',
    dataIndex: 'valorVenda',
    key: 'valorVenda',
    render: ((value: number) => (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(value))

  },
  {
    title: 'Quantidade Aquisicao',
    dataIndex: 'quantidadeAquisicao',
    key: 'quantidadeAquisicao',
    render: ((value: number) => (new Intl.NumberFormat()).format(value))

  },
  {
    title: 'Valor Aquisicao',
    dataIndex: 'valorAquisicao',
    key: 'valorAquisicao',
    render: ((value: number) => (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(value))

  },
  {
    title: 'Quantidade Final',
    dataIndex: 'quantidadeFinal',
    key: 'quantidadeFinal',
    render: ((value: number) => (new Intl.NumberFormat()).format(value))

  },
  {
    title: 'Valor Final',
    dataIndex: 'valorFinal',
    key: 'valorFinal',
    render: ((value: number) => (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(value))
  },
  {
    title: 'Data Competencia',
    dataIndex: 'dataCompetencia',
    key: 'dataCompetencia',
    render: ((date: Moment) => date.format("DD-MM-YYYY"))
  }
];



function FundoCompositionTable() {

  const data = FundosInfoStore.listen().fundoDetails.composition

  const [dataSource, setDataSource] = useState<FundoComposition[]>([])
  const [year, setYear] = useState<number | undefined>()
  const [cnpj, setCnpj] = useState<string | undefined>()


  useEffect(() => { setDataSource([...data]) }, [data])

  const handleCNPJ = (value: any) => {
    setCnpj(value.currentTarget.value)
    filterData({ cnpj: value.currentTarget.value })
  }

  const handleCode = (value: any) => {
    filterData({ code: value.currentTarget.value })
  }

  const handleYear = (value: Moment | null) => {
    setYear(value?.year())
    filterData({ year: value?.year() })
  }


  const filterData = ({ year, cnpj, code }: any) => {
    var newData = data
    if (cnpj)
      newData = newData.filter(v => v.cnpj.includes(cnpj))
    if (code)
      newData = newData.filter(v => v.codigoAtivo.includes(code))
    if (year)
      newData = newData.filter(v => v.dataCompetencia.year() === year)

    setDataSource([...newData])
  }

  return (
    <div>
      <Filters>
        <WidthInput placeholder="Filter by Code" onChange={handleCode}></WidthInput>
        <WidthInput placeholder="Filter by CNPJ" onChange={handleCNPJ}></WidthInput>
        <WidthDatePicker placeholder="Filter by Year" onChange={handleYear} picker="year" />
      </Filters>
      <Table pagination={{ pageSize: 5 }} dataSource={dataSource} columns={columns} scroll={{ x: "100%" }} />

    </div>
  )
}

export default FundoCompositionTable