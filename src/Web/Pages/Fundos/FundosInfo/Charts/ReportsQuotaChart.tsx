import { Line } from '@ant-design/charts';
import moment from 'moment';
import { stringify } from 'querystring';
import React from 'react'
import FundosInfoStore from '../../../../../Store/fundosInfoStore';


function FundoResumo() {
    function sortDates(d1: string, d2: string) {
        return moment(d1, "DD/MM/YYYY").diff(moment(d2, "DD/MM/YYYY"))
    }

    const fundos = FundosInfoStore.listen()

    const dataSource = fundos.fundoDetails.report
    const compareData = fundos.fundoQuotaCompare?.report


    const capt = dataSource.map(report => { return { value: report.valorQuota, data: report.dataCompetencia.format("DD/MM/YYYY"), category: fundos.fundoDetails.info[0].denomSocial} })
    let data;
    if (compareData)
         data = capt.concat(compareData.map(report => { return { value: report.valorQuota, data: report.dataCompetencia.format("DD/MM/YYYY"), category: fundos.fundoQuotaCompare!.info[0].denomSocial } }))
    else
         data = capt



    var config = {
        data: data.sort((a, b) => sortDates(a.data, b.data)),
        xField: 'data',
        yField: 'value',
        seriesField: 'category',
        yAxis: {
            type: "linear",
            label: {
                formatter: function formatter(v: any) {
                    return (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(v)
                },
            },
        },
        color: ['#1979C9', '#D62A0D'],
    };
    return <Line {...config} />;
}

export default FundoResumo

