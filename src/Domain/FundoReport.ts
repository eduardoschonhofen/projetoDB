import moment, { Moment } from "moment"

class FundoReport {
	constructor(
        public cnpj : string,
        public dataCompetencia : Moment,
        public valorTotal : number,
        public valorPatrimonio : number,
        public captacaoDia : number,
		public resgateDia: number,
		public numeroCotistas: number,
		public valorQuota: number

	) {}
}

export function FundoReportFactory(
	obj: Partial<FundoReport>
): FundoReport {
	return new FundoReport(
		obj.cnpj || '',
		obj.dataCompetencia || moment(),
		obj.valorTotal || 0,
        obj.valorPatrimonio || 0,
        obj.captacaoDia || 0,
		obj.resgateDia || 0,
		obj.numeroCotistas || 0,
		obj.valorQuota || 0
	)
}

export default FundoReport

