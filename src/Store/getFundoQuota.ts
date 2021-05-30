import FundosInfoService from "../Persistence/FundosInfoService"
import FundosInfoStore from "./fundosInfoStore"

async function getFundoQuota(cnpj: string) {
	const state = FundosInfoStore.getState()

	try {
		const response = await FundosInfoService.getByCNPJ(cnpj)
		state.fundoQuotaCompare = response

		FundosInfoStore.notify()
	} catch (e) {
		alert("Erro ao carregar detalhes do fundo")
	}
}

export default getFundoQuota
