import FundosInfoService from "../Persistence/FundosInfoService"
import FundosInfoStore from "./fundosInfoStore"

async function getfundosInfo() {
	const state = FundosInfoStore.getState()

	try {
		const response = await FundosInfoService.getAll()
		state.fundosInfo = response

		FundosInfoStore.notify()
	} catch (e) {
		alert("Erro ao carregar fundos")
	}
}

export default getfundosInfo
