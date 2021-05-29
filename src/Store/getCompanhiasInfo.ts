import CompanhiasInfoService from "../Persistence/FundosInfoService"
import CompanhiasInfoStore from "./companhiasInfoStore"

async function getCompanhiasInfo() {
	const state = CompanhiasInfoStore.getState()

	try {
		const response = await CompanhiasInfoService.getAll()
		state.companhiasInfo = response

		CompanhiasInfoStore.notify()
	} catch (e) {
		alert("Erro ao carregar fundos")
	}
}

export default getCompanhiasInfo
