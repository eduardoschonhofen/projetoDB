import CompanhiaDetails, { CompanhiaDetailsFactory } from "../Domain/CompanhiaDetails"
import CompanhiaInfo from "../Domain/CompanhiaInfo"
import Store from "./Store"

class CompanhiasInfo {
	constructor(
		public companhiasInfo: CompanhiaInfo[] = [],
		public companhiaDetails: CompanhiaDetails = CompanhiaDetailsFactory({})
	) { }
}

const CompanhiasInfoStore = new Store(new CompanhiasInfo())

export default CompanhiasInfoStore
