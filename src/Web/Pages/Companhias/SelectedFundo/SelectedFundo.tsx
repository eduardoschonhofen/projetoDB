import { CloseOutlined } from '@ant-design/icons'
import { Collapse, ConfigProvider, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import CompanhiaInfo from '../../../../Domain/CompanhiaInfo'
import useScrollContainer from '../../../../Infra/Hooks/useScrollContainer'
import CompanhiasInfoStore from '../../../../Store/companhiasInfoStore'
import { ContainerInfo } from '../CompanhiasInfo/style'
import CompanhiaResumo from '../SelectedCompanhia/CompanhiaResumo'

const { Panel } = Collapse

const id = 'companhia-page'

type Props = {
    companhia?: CompanhiaInfo
    closeCompanhia(): void
}


function Selectedcompanhia({ companhia, closeCompanhia }: Props) {
    const companhiaDetails = CompanhiasInfoStore.listen().companhiaDetails
    const closeButton = () => companhia ? (
        <CloseOutlined
            style={{ color: "red" }}
            onClick={event => {
                event.stopPropagation();
                closeCompanhia()
            }} />
    ) : <></>
    const scroll = useScrollContainer(id)
    return (
        <ConfigProvider getPopupContainer={() => scroll.current}>
            <div id={id}>
                <Collapse activeKey={[companhia ? 1 : -1]} accordion>
                    <Panel collapsible={companhia ? "header" : "disabled"} header={companhia ? companhia.denomSocial : "Selecione um registro na tabela abaixo"} key="1" extra={closeButton()}>
                        <ContainerInfo><CompanhiaResumo companhia={companhia} /></ContainerInfo>
                    </Panel>
                </Collapse>
            </div>
        </ConfigProvider>

    )
}

export default Selectedcompanhia

