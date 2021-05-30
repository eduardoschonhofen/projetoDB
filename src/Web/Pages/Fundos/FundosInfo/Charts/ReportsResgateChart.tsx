import { Line } from '@ant-design/charts';
import moment from 'moment';
import { stringify } from 'querystring';
import React from 'react'
import FundosInfoStore from '../../../../../Store/fundosInfoStore';


function ReportsResgateChart() {
    function sortDates(d1:string,d2:string)
    {
        return moment(d1,"DD/MM/YYYY").diff(moment(d2,"DD/MM/YYYY"))
    }

    const dataSource = FundosInfoStore.listen().fundoDetails.report


    const capt = dataSource.map(report => { return { value:report.captacaoDia, data:report.dataCompetencia.format("DD/MM/YYYY"), category: "Valor Captado"} })
    const data=capt.concat(dataSource.map(report => { return { data:report.dataCompetencia.format("DD/MM/YYYY"), value:report.resgateDia, category: "Valor Resgatado"} }))

    var config = {
        data: data.sort((a,b) => sortDates(a.data,b.data)),
        xField: 'data',
        yField: 'value',
        seriesField: 'category',
        yAxis: {
            type:"log",
            label: {
                formatter: function formatter(v:any) {
                    return (new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })).format(v)
                },
            },
        },
        color: ['#1979C9', '#D62A0D'],
    };
    return <Line {...config} />;
}

export default ReportsResgateChart

