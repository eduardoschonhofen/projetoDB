import { ConfigProvider } from 'antd'
import React, { useEffect, useState } from 'react'
import CompanhiaInfo from '../../../../Domain/CompanhiaInfo'
import useScrollContainer from '../../../../Infra/Hooks/useScrollContainer'
import getCompanhiaDetails from '../../../../Store/getCompanhiaDetails'
import SelectedCompanhia from '../SelectedCompanhia/SelectedCompanhia'
import CompanhiasInfoTable from './DataTable/CompanhiasInfoTable'
import { PageContainer, SelectCompanhiaContainer } from './style'


const id = 'companhias-page'

function FundosInfoPage() {

	const scroll = useScrollContainer(id)

	const [selectedCompanhia, setSelectedCompanhia] = useState<CompanhiaInfo | undefined>(undefined)

	useEffect(() => {
		if (selectedCompanhia) {
			scroll.current.scrollIntoView();
			getCompanhiaDetails(selectedCompanhia.cnpj)
		}
	}, [selectedCompanhia])

	return (
		<ConfigProvider getPopupContainer={() => scroll.current}>
			<PageContainer title="Companhias Abertas" id={id}>
				<SelectCompanhiaContainer>
					<SelectedCompanhia companhia={selectedCompanhia} closeCompanhia={() => setSelectedCompanhia(undefined)}></SelectedCompanhia>
				</SelectCompanhiaContainer>
				<CompanhiasInfoTable setSelectedCompanhia={setSelectedCompanhia}></CompanhiasInfoTable>
			</PageContainer>
		</ConfigProvider>

	)
}

export default FundosInfoPage

