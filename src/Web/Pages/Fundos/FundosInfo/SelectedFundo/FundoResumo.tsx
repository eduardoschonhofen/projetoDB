import { Descriptions } from 'antd'
import React, { useState } from 'react'
import FundoInfo from '../../../../../Domain/FundoInfo'



type Props = {
    fundo?: FundoInfo
}


function FundoResumo({ fundo }: Props) {
    return (
        <Descriptions title="Informações Gerais" bordered>
            <Descriptions.Item label="CNPJ">{fundo?.cnpj}</Descriptions.Item>
            <Descriptions.Item label="Data de Registro">{fundo ? fundo.dataRegistro.format("DD-MM-YYYY") : ''}</Descriptions.Item>
            <Descriptions.Item label="Administrador">{fundo?.admin}</Descriptions.Item>
            <Descriptions.Item label="Gestor">{fundo?.gestor}</Descriptions.Item>
        </Descriptions>
    )
}

export default FundoResumo

