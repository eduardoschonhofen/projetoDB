import { CloseOutlined } from '@ant-design/icons'
import { Collapse, ConfigProvider, Select } from 'antd'
import React, { useState } from 'react'
import FundoInfo from '../../../../../Domain/FundoInfo'
import useScrollContainer from '../../../../../Infra/Hooks/useScrollContainer'
import FundoResumo from './FundoResumo'
const { Panel } = Collapse

const id = 'fundo-page'

type Props = {
    fundo?: FundoInfo
    closeFundo(): void
}


function SelectedFundo({ fundo, closeFundo }: Props) {
    const closeButton = () => fundo ? (
        <CloseOutlined
            style={{ color: "red" }}
            onClick={event => {
                event.stopPropagation();
                closeFundo()
            }} />
    ) : <></>

    const scroll = useScrollContainer(id)
    return (
        <ConfigProvider getPopupContainer={() => scroll.current}>
            <div id={id}>
                <Collapse>
                    <Panel disabled={!fundo} header={fundo ? fundo.denomSocial : "Selecione um registro na tabela abaixo"} key="1" extra={closeButton()}>
                        <FundoResumo fundo={fundo} />
                    </Panel>
                </Collapse>
            </div>
        </ConfigProvider>

    )
}

export default SelectedFundo

