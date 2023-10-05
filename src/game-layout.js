import styles from "./game.module.scss"
import { Cell } from "./components/cell"
import { store } from "./store"

const GameLayout = ({ field, player, winner }) => {
	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return (
		<>
			<p>Now playing: {player}</p>
			<div className={styles.game}>{fieldElems}</div>
			{winner && <div>Winner: {winner}</div>}
			<button onClick={() => store.dispatch({ type: "reset" })}>Start over</button>
		</>
	)
}

export { GameLayout }
