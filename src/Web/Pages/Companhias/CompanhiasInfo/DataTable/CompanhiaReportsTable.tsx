import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import moment, { Moment } from 'moment';

import CompanhiasInfoStore from '../../../../../Store/companhiasInfoStore';
import { ChangeEventHandler } from 'react';
import CompanhiaReport from '../../../../../Domain/CompanhiaReport';
import { Filters, WidthDatePicker, WidthInput } from '../style';


function CompanhiaReportsTable() {
  const data = CompanhiasInfoStore.listen().companhiaDetails.report;
  const [dataSource, setDataSource] = useState<CompanhiaReport[]>([])
  const [year, setYear] = useState<number | undefined>()
  const [cnpj, setCnpj] = useState<string | undefined>()
  const [code, setCode] = useState<string | undefined>()


  useEffect(() => { setDataSource([...data]) }, [data])


  const columns = [
    {
      title: 'Código',
      dataIndex: 'codigoConta',
      key: 'codigoConta',
      fixed: "left" as "left",

    },
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricaoConta',
      key: 'descricaoConta',
    },
    {
      title: 'Valor',
      dataIndex: 'valorConta',
      key: 'valorConta',
      render: ((value: number) => (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(value))
    },
    {
      title: 'Data Referência',
      dataIndex: 'dataReferencia',
      key: 'dataReferencia',
      render: ((date: Moment) => date.format("DD-MM-YYYY")),
    }
  ];
  const handleCNPJ = (value: any) => {
    setCnpj(value.currentTarget.value)
    filterData({ cnpj: value.currentTarget.value, code: code, year: year })
  }

  const handleYear = (value: Moment | null) => {
    setYear(value?.year())
    filterData({ year: value?.year(),cnpj:cnpj,code:code })
  }

  const handleCode = (value: any) => {
    setCode(value.currentTarget.value)
    filterData({ code: value.currentTarget.value,year:year,cnpj:cnpj })
  }
  const filterData = ({ year, cnpj, code }: any) => {
    var newData = data
    if (cnpj)
      newData = newData.filter(v => v.cnpj.includes(cnpj))
    if (year)
      newData = newData.filter(v => v.dataReferencia.year() === year)
    if (code)
      newData = newData.filter(v => v.codigoConta.includes(code))


    setDataSource([...newData])

  }
  return (
    <div>
      <Filters>
        <WidthInput placeholder="Filter by Code" onChange={handleCode}></WidthInput>
        <WidthInput placeholder="Filter by CNPJ" onChange={handleCNPJ}></WidthInput>
        <WidthDatePicker placeholder="Filter by Year" onChange={handleYear} picker="year" />
      </Filters>
      <Table pagination={{ pageSize: 500, simple: true }} dataSource={dataSource} columns={columns} scroll={{ x: "100%" }} />

    </div>
  )
}

export default CompanhiaReportsTable