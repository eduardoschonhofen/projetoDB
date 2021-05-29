import BaseService from './BaseService'
import FundoInfo, { FundoInfoFactory } from '../Domain/FundoInfo'
import moment from 'moment'

type FundosInfoList = { list: FundoInfoResponse[] }


type FundoInfoResponse = {
    CNPJ_FUNDO: string,
    DENOM_SOCIAL: string,
    DT_REG: string,
    ADMIN: string,
    GESTOR: string
}

class FundosInfoService {
    private static model = '/funds'

    static async getAll(): Promise<FundoInfo[]> {
        const response = (
            await BaseService.get<FundosInfoList, void>(this.model)
        ).data

        return response.list.map(fundo => {
            return FundoInfoFactory({
                cnpj: fundo.CNPJ_FUNDO,
                denomSocial: fundo.DENOM_SOCIAL,
                gestor: fundo.GESTOR,
                admin: fundo.ADMIN,
                dataRegistro: moment(fundo.DT_REG)
            })
        }
        )
    }
}

export default FundosInfoService