import { useEffect, useRef } from 'react'

class NoElementFoundException implements Error {
	public name = 'NoElementFoundException'
	public message!: string
	constructor(id: string) {
		this.message = `Could not find element with id ${id}`
	}
}

function useScrollContainer(id: string) {
	const anchor = useRef<HTMLElement>(document.body)

	useEffect(() => {
		const element = document.getElementById(id)
		if (!element) throw new NoElementFoundException(id)
		anchor.current = element
	}, [id])

	return anchor
}

export default useScrollContainer
