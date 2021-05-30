import moment, { Moment } from "moment"
import CompanhiaInfo from "./CompanhiaInfo"
import CompanhiaReport from "./CompanhiaReport"

class CompanhiaDetails {
	constructor(
		public info: CompanhiaInfo[],
		public report: CompanhiaReport[],
	) {}
}

export function CompanhiaDetailsFactory(
	obj: Partial<CompanhiaDetails>
): CompanhiaDetails {
	return new CompanhiaDetails(
		obj.info || [],
		obj.report || []
	)
}

export default CompanhiaDetails
