import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Collapse, ConfigProvider, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import FundoInfo from '../../../../../Domain/FundoInfo'
import useScrollContainer from '../../../../../Infra/Hooks/useScrollContainer'
import FundosInfoStore from '../../../../../Store/fundosInfoStore'
import getFundoQuota from '../../../../../Store/getFundoQuota'
import ReportsQuotaChart from '../Charts/ReportsQuotaChart'
import ReportsResgateChart from '../Charts/ReportsResgateChart'
import FundoCompositionTable from '../DataTable/FundoCompositionTable'
import { ButtonAnt, CompararQuota, ContainerInfo, FilterContainer, WidthInput, WidthLargeInput } from '../style'
import FundoResumo from './FundoResumo'
const { Panel } = Collapse

const id = 'fundo-page'

type Props = {
    fundo?: FundoInfo
    closeFundo(): void
}


function SelectedFundo({ fundo, closeFundo }: Props) {
    const fundoDetails = FundosInfoStore.listen().fundoDetails
    const [cnpj, setCnpj] = useState<string | undefined>()


    const closeButton = () => fundo ? (
        <CloseOutlined
            style={{ color: "red" }}
            onClick={event => {
                event.stopPropagation();
                closeFundo()
            }} />
    ) : <></>
    const scroll = useScrollContainer(id)


    const handleCNPJ = (value: any) => {
        setCnpj(value.currentTarget.value)
    }

    const getCompareFundo = async () => {
        if (cnpj)
            getFundoQuota(cnpj)
    }


    return (
        <ConfigProvider getPopupContainer={() => scroll.current}>
            <div id={id}>
                <Collapse activeKey={[fundo ? 1 : -1]} accordion>
                    <Panel collapsible={fundo ? "header" : "disabled"} header={fundo ? fundo.denomSocial : "Selecione um registro na tabela abaixo"} key="1" extra={closeButton()}>
                        <ContainerInfo><FundoResumo fundo={fundo} /></ContainerInfo>
                        <ContainerInfo>{fundo && <FundoCompositionTable></FundoCompositionTable>}</ContainerInfo>
                        <ContainerInfo><h1>Captações e Resgates</h1>{fundo && <ReportsResgateChart></ReportsResgateChart>}</ContainerInfo>
                        <ContainerInfo>
                            <CompararQuota>
                                <h1>Valor da Quota</h1>
                                <FilterContainer>
                                    <WidthLargeInput placeholder="Enter CNPJ" onChange={handleCNPJ}></WidthLargeInput>
                                    <ButtonAnt onClick={getCompareFundo} type="primary" icon={<SearchOutlined />}>Comparar Quotas</ButtonAnt>
                                </FilterContainer>

                            </CompararQuota>
                            {fundo && <ReportsQuotaChart></ReportsQuotaChart>}</ContainerInfo>
                    </Panel>
                </Collapse>
            </div>
        </ConfigProvider>

    )
}

export default SelectedFundo

