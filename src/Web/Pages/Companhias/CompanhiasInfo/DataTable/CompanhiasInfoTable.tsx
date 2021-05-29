import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import CompanhiaInfo from '../../../../../Domain/CompanhiaInfo';
import moment, { Moment } from 'moment';
import CompanhiasInfoStore from '../../../../../Store/companhiasInfoStore';




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
      render: ((date:Moment) => date.format("DD-MM-YYYY")) 
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


function CompanhiasInfoTable() {

    const dataSource = CompanhiasInfoStore.listen().companhiasInfo

    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

export default CompanhiasInfoTable