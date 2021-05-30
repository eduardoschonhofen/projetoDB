import BaseService from './BaseService'
import CompanhiaInfo, { CompanhiaInfoFactory } from '../Domain/CompanhiaInfo'
import moment from 'moment'
import CompanhiaDetails, { CompanhiaDetailsFactory } from '../Domain/CompanhiaDetails'
import { CompanhiaReportFactory } from '../Domain/CompanhiaReport'

type CompanhiasInfoList = { list: CompanhiaInfoResponse[] }

type CompanhiaInfoResponse = {
    CNPJ_CIA: string,
    DENOM_SOCIAL: string,
    DENOM_COMERC: string,
    DT_REG: string,
    SETOR_ATIV: string,
    CONTROLE_ACIONARIO: string
}

type CompanhiaReportResponse = {
    CNPJ_CIA: string,
    DT_REFER: string,
    CD_CONTA: string,
    DS_CONTA: string,
    VL_CONTA: number,
}

type CompanhiaDetailsResponse = {
    info: CompanhiaInfoResponse[],
    report: CompanhiaReportResponse[],
}

class CompanhiasInfoService {
    private static model = '/stocks'

    static async getAll(): Promise<CompanhiaInfo[]> {
        const response = (
            await BaseService.get<CompanhiasInfoList, void>(this.model)
        ).data

        return response.list.map(companhia => {
            return CompanhiaInfoFactory({
                cnpj: companhia.CNPJ_CIA,
                denomSocial: companhia.DENOM_SOCIAL,
                denomComercio: companhia.DENOM_COMERC,
                setorAtividade: companhia.SETOR_ATIV,
                controleAcionario: companhia.CONTROLE_ACIONARIO,
                dataRegistro: moment(companhia.DT_REG)
            })
        }
        )
    }



    static async getByCNPJ(cnpj: string): Promise<CompanhiaDetails> {
        const response = (
            await BaseService.get<CompanhiaDetailsResponse, string>(this.model, '/' + cnpj.replace(/[^0-9]/g, ''))
        ).data

        return CompanhiaDetailsFactory({
            info: response.info.map(cia => {
                return CompanhiaInfoFactory({
                    cnpj: cia.CNPJ_CIA,
                    denomSocial: cia.DENOM_SOCIAL,
                    denomComercio: cia.DENOM_COMERC,
                    setorAtividade: cia.SETOR_ATIV,
                    controleAcionario: cia.CONTROLE_ACIONARIO,
                    dataRegistro: moment(cia.DT_REG)
                })
            }),
            report: response.report.map(cia => {
                return CompanhiaReportFactory({
                   cnpj: cia.CNPJ_CIA,
                   codigoConta: cia.CD_CONTA,
                   dataReferencia: moment(cia.DT_REFER),
                   descricaoConta: cia.DS_CONTA,
                   valorConta: cia.VL_CONTA
                })
            })
        })
    }
}

export default CompanhiasInfoService