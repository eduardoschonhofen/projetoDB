import moment, { Moment } from "moment"

class CompanhiaReport {
	constructor(
        public cnpj : string,
        public dataReferencia : Moment,
        public codigoConta : string,
        public descricaoConta : string,
        public valorConta : number,

	) {}
}

export function CompanhiaReportFactory(
	obj: Partial<CompanhiaReport>
): CompanhiaReport {
	return new CompanhiaReport(
		obj.cnpj || '',
		obj.dataReferencia || moment(),
		obj.codigoConta || '',
		obj.descricaoConta || '',
		obj.valorConta || 0
	)
}

export default CompanhiaReport

