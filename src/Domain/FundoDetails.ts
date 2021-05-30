import moment, { Moment } from "moment"
import FundoComposition from "./FundoComposition"
import FundoInfo from "./FundoInfo"
import FundoReport from "./FundoReport"

class FundoDetails {
	constructor(
		public info: FundoInfo[],
		public composition: FundoComposition[],
		public report: FundoReport[],
	) {}
}

export function FundoDetailsFactory(
	obj: Partial<FundoDetails>
): FundoDetails {
	return new FundoDetails(
		obj.info || [],
		obj.composition || [],
		obj.report || []
	)
}

export default FundoDetails
