import FundosInfoService from "../Persistence/FundosInfoService"
import FundosInfoStore from "./fundosInfoStore"

async function getFundoDetails(cnpj: string) {
	const state = FundosInfoStore.getState()

	try {
		const response = await FundosInfoService.getByCNPJ(cnpj)
		state.fundoDetails = response
		state.fundoQuotaCompare = undefined

		FundosInfoStore.notify()
	} catch (e) {
		alert("Erro ao carregar detalhes do fundo")
	}
}

export default getFundoDetails
