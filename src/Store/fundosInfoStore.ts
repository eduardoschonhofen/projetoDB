import FundoInfo from "../Domain/FundoInfo"
import Store from "./Store"

class FundosInfo {
	constructor(
		public fundosInfo: FundoInfo[] = []
	) { }
}

const FundosInfoStore = new Store(new FundosInfo())

export default FundosInfoStore
