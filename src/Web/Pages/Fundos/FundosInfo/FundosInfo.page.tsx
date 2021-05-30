import { ConfigProvider } from 'antd'
import React, { useEffect, useState } from 'react'
import FundoInfo from '../../../../Domain/FundoInfo'
import useScrollContainer from '../../../../Infra/Hooks/useScrollContainer'
import getFundoDetails from '../../../../Store/getFundoDetails'
import FundoCompositionTable from './DataTable/FundoCompositionTable'
import FundosInfoTable from './DataTable/FundosInfoTable'
import SelectedFundo from './SelectedFundo/SelectedFundo'
import { PageContainer, SelectFundoContainer } from './style'


const id = 'fundos-page'

function FundosInfoPage() {

	const scroll = useScrollContainer(id)
	const [selectedFundo, setSelectedFundo] = useState<FundoInfo | undefined>(undefined)
	

	useEffect(() => {
		if (selectedFundo) {
			scroll.current.scrollIntoView();
			getFundoDetails(selectedFundo.cnpj)
		}
	}, [selectedFundo])

	return (
		<ConfigProvider getPopupContainer={() => scroll.current}>
			<PageContainer title="Fundos de Investimentos" id={id}>
				<SelectFundoContainer>
					<SelectedFundo fundo={selectedFundo} closeFundo={() => setSelectedFundo(undefined)}></SelectedFundo>
				</SelectFundoContainer>
				<FundosInfoTable setSelectedFundo={setSelectedFundo}></FundosInfoTable>
			</PageContainer>
		</ConfigProvider>
	)
}

export default FundosInfoPage

