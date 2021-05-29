import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import FundoInfo from '../../../../../Domain/FundoInfo';
import moment, { Moment } from 'moment';
import FundosInfoStore from '../../../../../Store/fundosInfoStore';




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


  type Props = {
    setSelectedFundo(fundo:FundoInfo): void
  }
function FundosInfoTable({setSelectedFundo}:Props) {

    const dataSource = FundosInfoStore.listen().fundosInfo

    return (
        <Table dataSource={dataSource} columns={columns}  onRow={(record, rowIndex) => {
          return {
            onClick: _event => {setSelectedFundo(record)}, 
          };
        }}/>
    )
}

export default FundosInfoTable