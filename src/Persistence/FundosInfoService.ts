import BaseService from './BaseService'
import FundoInfo, { FundoInfoFactory } from '../Domain/FundoInfo'
import moment from 'moment'
import { info } from 'console'
import FundoDetails, { FundoDetailsFactory } from '../Domain/FundoDetails'
import { FundoCompositionFactory } from '../Domain/FundoComposition'
import { FundoReportFactory } from '../Domain/FundoReport'

type FundosInfoList = { list: FundoInfoResponse[] }


type FundoInfoResponse = {
    CNPJ_FUNDO: string,
    DENOM_SOCIAL: string,
    DT_REG: string,
    ADMIN: string,
    GESTOR: string
}

type FundoCompositionResponse = {
    CNPJ_FUNDO: string,
    DT_COMPTC: string,
    TP_APLIC: string,
    TP_ATIVO: string,
    QT_VENDA_NEGOC: number,
    VL_VENDA_NEGOC: number,
    QT_AQUIS_NEGOC: number,
    VL_AQUIS_NEGOC: number,
    QT_POS_FINAL: number,
    VL_MERC_POS_FINAL: number,
    CD_ATIVO: string
}

type FundoReportResponse = {
    CNPJ_FUNDO: string,
    DT_COMPTC: string,
    VL_TOTAL: number,
    VL_QUOTA: number,
    VL_PATRIM_LIQ: number,
    CAPTC_DIA: number,
    RESG_DIA: number,
    NR_COTST: number
}

type FundoDetailsResponse = {
    info: FundoInfoResponse[],
    composition: FundoCompositionResponse[],
    report: FundoReportResponse[],
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

    static async getByCNPJ(cnpj: string): Promise<FundoDetails> {
        const response = (
            await BaseService.get<FundoDetailsResponse, string>(this.model, '/' + cnpj.replace(/[^0-9]/g, ''))
        ).data

        return FundoDetailsFactory({
            composition: response.composition.map(comp => {
                return FundoCompositionFactory({
                    cnpj: comp.CNPJ_FUNDO,
                    codigoAtivo: comp.CD_ATIVO,
                    dataCompetencia: moment(comp.DT_COMPTC),
                    quantidadeAquisicao: comp.QT_AQUIS_NEGOC,
                    quantidadeFinal: comp.QT_POS_FINAL,
                    quantidadeVenda: comp.QT_VENDA_NEGOC,
                    tipoAplicacao: comp.TP_APLIC,
                    tipoAtivo: comp.TP_ATIVO,
                    valorAquisicao: comp.VL_AQUIS_NEGOC,
                    valorFinal: comp.VL_MERC_POS_FINAL,
                    valorVenda: comp.VL_VENDA_NEGOC
                })
            }),
            info: response.info.map(fundo => {
                return FundoInfoFactory({
                    cnpj: fundo.CNPJ_FUNDO,
                    denomSocial: fundo.DENOM_SOCIAL,
                    gestor: fundo.GESTOR,
                    admin: fundo.ADMIN,
                    dataRegistro: moment(fundo.DT_REG)
                })
            }),
            report: response.report.map(rep => {
                return FundoReportFactory({
                    captacaoDia: rep.CAPTC_DIA,
                    cnpj: rep.CNPJ_FUNDO,
                    dataCompetencia: moment(rep.DT_COMPTC),
                    numeroCotistas: rep.NR_COTST,
                    resgateDia: rep.RESG_DIA,
                    valorPatrimonio: rep.VL_PATRIM_LIQ,
                    valorTotal: rep.VL_TOTAL,
                    valorQuota: rep.VL_QUOTA

                })
            })
        })
    }

}

export default FundosInfoService