import { Descriptions } from 'antd'
import React, { useState } from 'react'
import CompanhiaInfo from '../../../../Domain/CompanhiaInfo'



type Props = {
    companhia?: CompanhiaInfo
}


function CompanhiaResumo({ companhia }: Props) {
    return (
        <Descriptions title="Informações Gerais" bordered>
            <Descriptions.Item label="CNPJ">{companhia?.cnpj}</Descriptions.Item>
            <Descriptions.Item label="Data de Registro">{companhia ? companhia.dataRegistro.format("DD-MM-YYYY") : ''}</Descriptions.Item>
            <Descriptions.Item label="Denominação Comércio">{companhia?.denomComercio}</Descriptions.Item>
            <Descriptions.Item label="Setor de Atividade Comércio">{companhia?.setorAtividade}</Descriptions.Item>
            <Descriptions.Item label="Controle Acionário">{companhia?.controleAcionario}</Descriptions.Item>
        </Descriptions>
    )
}

export default CompanhiaResumo

