import { useEffect } from 'react'

export default function useClickOutside(ref, func) {
	useEffect(() => {
		const handleClickOutside = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				func()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener(
				'mousedown',
				handleClickOutside,
			)
		}
	}, [func, ref])
}
