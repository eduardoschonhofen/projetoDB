import React, { FC, useMemo } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

type Props = {
	routes: IRoute[]
}

export interface IRoute {
	name?: string
	path: string
	component: React.LazyExoticComponent<FC> | FC
	exact?: boolean
	permissions?: string[]
	invisible?: boolean
}

function Router({ routes }: Props) {
	return (

		<Switch>
			{routes.map(route => (
				<Route key={route.name} {...route} />
			))}
			<Route>
				<Redirect to={'/'} />
			</Route>
		</Switch>

	)
}

export default Router