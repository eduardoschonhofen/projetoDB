import moment, { Moment } from "moment"

class FundoInfo {
	constructor(
        public cnpj : string,
        public denomSocial : string,
        public dataRegistro : Moment,
        public admin : string,
        public gestor : string
	) {}
}

export function FundoInfoFactory(
	obj: Partial<FundoInfo>
): FundoInfo {
	return new FundoInfo(
		obj.cnpj || '',
		obj.denomSocial || '',
		obj.dataRegistro || moment(),
        obj.admin || '',
        obj.gestor || '',
	)
}

export default FundoInfo
