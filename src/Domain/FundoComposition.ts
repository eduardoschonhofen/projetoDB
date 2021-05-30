import moment, { Moment } from "moment"

class FundoComposition {
	constructor(
        public cnpj : string,
        public dataCompetencia : Moment,
		public tipoAplicacao: string,
		public tipoAtivo: string,
		public quantidadeVenda: number,
        public valorVenda : number,
        public quantidadeAquisicao : number,
        public valorAquisicao : number,
		public quantidadeFinal: number,
		public valorFinal: number,
		public codigoAtivo: string
	) {}
}

export function FundoCompositionFactory(
	obj: Partial<FundoComposition>
): FundoComposition {
	return new FundoComposition(
		obj.cnpj || '',
		obj.dataCompetencia || moment(),
		obj.tipoAplicacao || '',
		obj.tipoAtivo || '',
		obj.quantidadeVenda || 0,
        obj.valorVenda || 0,
        obj.quantidadeAquisicao || 0,
		obj.valorAquisicao || 0,
		obj.quantidadeFinal || 0,
		obj.valorFinal || 0,
		obj.codigoAtivo || ''
	)
}

export default FundoComposition