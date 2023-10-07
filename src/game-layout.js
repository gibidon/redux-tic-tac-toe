import styles from "./game.module.scss"
import { Cell } from "./components/cell"
import { store } from "./store"
import { PLAYER_SIGN } from "./constants/player_signs"

const GameLayout = ({ field, player, winner, status }) => {
	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return (
		<>
			<p>Status: {status}</p>
			{winner === null && <p>Now playing: {PLAYER_SIGN[player]}</p>}
			<div className={styles.game}>{fieldElems}</div>
			{winner !== null && <div>Winner: {winner === 0 ? "CROSS" : "NOUGHTS"}</div>}
			<button onClick={() => store.dispatch({ type: "RESET" })}>Start over</button>
		</>
	)
}

export { GameLayout }
