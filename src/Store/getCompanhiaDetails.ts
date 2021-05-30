import CompanhiasInfoService from "../Persistence/CompanhiasInfoService"
import CompanhiasInfoStore from "./companhiasInfoStore"

async function getCompanhiaDetails(cnpj: string) {
	const state = CompanhiasInfoStore.getState()

	try {
		const response = await CompanhiasInfoService.getByCNPJ(cnpj)
		state.companhiaDetails = response

		CompanhiasInfoStore.notify()
	} catch (e) {
		alert("Erro ao carregar detalhes da companhia")
	}
}

export default getCompanhiaDetails
