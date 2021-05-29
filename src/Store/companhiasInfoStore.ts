import FundoInfo from "../Domain/FundoInfo"
import Store from "./Store"

class CompanhiasInfo {
	constructor(
		public companhiasInfo: FundoInfo[] = []
	) { }
}

const CompanhiasInfoStore = new Store(new CompanhiasInfo())

export default CompanhiasInfoStore
