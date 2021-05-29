import React, { createContext, useState, useContext, useEffect } from 'react'

type Shell<S> = { state: S }

class Store<S> {
	private empty = { state: {} } as Shell<S>

	private shell: Shell<S>
	private context: React.Context<Shell<S>>
	private setShell = (() => undefined) as (shell: Shell<S>) => void
	private mounted = false

	constructor(initial: S) {
		this.shell = { state: initial }
		this.context = createContext<Shell<S>>(this.shell)

		this.Provider = this.Provider.bind(this)
		this.notify = this.notify.bind(this)
		this.getState = this.getState.bind(this)
		this.listen = this.listen.bind(this)
	}

	getState() {
		return this.shell.state
	}

	notify() {
		if (this.mounted) this.setShell({ state: this.shell.state })
	}

	listen() {
		return useContext(this.context).state
	}

	Provider(props: { children: JSX.Element | JSX.Element[] }) {
		;[this.shell, this.setShell] = useState(this.shell)

		useEffect(() => {
			this.mounted = true
			return () => {
				this.mounted = false
			}
		}, [])

		return (
			<this.context.Provider value={this.shell}>
				{props.children}
			</this.context.Provider>
		)
	}
}

export default Store