import styles from "./game.module.scss"
import { Cell } from "./components/cell"

const GameLayout = ({ field }) => {
	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return (
		<div className={styles.game}>
			<p>GameLayout here</p>
			{fieldElems}
		</div>
	)
}

export { GameLayout }
