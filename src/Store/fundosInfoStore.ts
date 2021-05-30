import FundoDetails, { FundoDetailsFactory } from "../Domain/FundoDetails"
import FundoInfo from "../Domain/FundoInfo"
import Store from "./Store"

class FundosInfo {
	constructor(
		public fundosInfo: FundoInfo[] = [],
		public fundoDetails: FundoDetails = FundoDetailsFactory({}),
		public fundoQuotaCompare: FundoDetails | undefined = undefined
	) { }
}

const FundosInfoStore = new Store(new FundosInfo())

export default FundosInfoStore
