import { motion } from 'framer-motion'

const xTransition = {
	in: {
		opacity: 1,
		x: 0,
		paddingBottom: "1rem",
	},
	out: {
		opacity: 0,
		x: '-100%',
		paddingBottom: "1rem",
	},
}

const fade = {
	in: {
		opacity: 1,
		zIndex: -1,
	},
	out: {
		opacity: 0,
		zIndex: -1,
	},
}

export function XTransition({ children }) {
	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={xTransition}
		>
			{children}
		</motion.div>
	)
}
export function Fade({ children }) {
	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={fade}
		>
			{children}
		</motion.div>
	)
}
