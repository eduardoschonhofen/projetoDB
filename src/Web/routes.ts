import { IRoute } from "../Infra/Navigation/Router"
import CompanhiasInfoLoader from "./Pages/Companhias/CompanhiasInfo/CompanhiasInfo.loader"
import FundosInfoLoader from "./Pages/Fundos/FundosInfo/FundosInfo.loader"

const appRoutes: IRoute[] = [
	{
		name: 'FundosInfo',
		path: '/fundos',
		component: FundosInfoLoader
	},
	{
		name: 'CompanhiasInfo',
		path: '/companhias',
		component: CompanhiasInfoLoader,
	}
]

export default appRoutes