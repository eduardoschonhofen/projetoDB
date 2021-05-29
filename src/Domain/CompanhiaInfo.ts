import moment, { Moment } from "moment"

class CompanhiaInfo {
	constructor(
        public cnpj : string,
        public denomSocial : string,
		public denomComercio : string,
        public dataRegistro : Moment,
        public setorAtividade : string,
        public controleAcionario : string
	) {}
}

export function CompanhiaInfoFactory(
	obj: Partial<CompanhiaInfo>
): CompanhiaInfo {
	return new CompanhiaInfo(
		obj.cnpj || '',
		obj.denomSocial || '',
		obj.denomComercio || '',
		obj.dataRegistro || moment(),
        obj.setorAtividade || '',
        obj.controleAcionario || '',
	)
}

export default CompanhiaInfo
