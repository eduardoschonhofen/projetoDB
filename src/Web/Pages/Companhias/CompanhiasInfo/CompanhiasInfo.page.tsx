import { ConfigProvider } from 'antd'
import React from 'react'
import useScrollContainer from '../../../../Infra/Hooks/useScrollContainer'
import CompanhiasInfoTable from './DataTable/CompanhiasInfoTable'
import { PageContainer } from './style'


const id = 'companhias-page'

function FundosInfoPage() {

	const scroll = useScrollContainer(id)

	return (
		<ConfigProvider getPopupContainer={() => scroll.current}>
			<PageContainer title="Companhias Abertas" id={id}>
				<CompanhiasInfoTable></CompanhiasInfoTable>
			</PageContainer>
		</ConfigProvider>

	)
}

export default FundosInfoPage

