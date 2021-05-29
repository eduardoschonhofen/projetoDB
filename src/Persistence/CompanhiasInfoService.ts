import BaseService from './BaseService'
import CompanhiaInfo, { CompanhiaInfoFactory } from '../Domain/CompanhiaInfo'
import moment from 'moment'

type CompanhiasInfoList = { list: CompanhiaInfoResponse[] }

type CompanhiaInfoResponse = {
    CNPJ_CIA: string,
    DENOM_SOCIAL: string,
    DENOM_COMERC: string,
    DT_REG: string,
    SETOR_ATIV: string,
    CONTROLE_ACIONARIO: string
}

class CompanhiasInfoService {
    private static model = '/stocks'

    static async getAll(): Promise<CompanhiaInfo[]> {
        const response = (
            await BaseService.get<CompanhiasInfoList, void>(this.model)
        ).data

        return response.list.map(fundo => {
            return CompanhiaInfoFactory({
                cnpj: fundo.CNPJ_CIA,
                denomSocial: fundo.DENOM_SOCIAL,
                denomComercio:fundo.DENOM_COMERC,
                setorAtividade: fundo.SETOR_ATIV,
                controleAcionario: fundo.CONTROLE_ACIONARIO,
                dataRegistro: moment(fundo.DT_REG)
            })
        }
        )
    }
}

export default CompanhiasInfoService