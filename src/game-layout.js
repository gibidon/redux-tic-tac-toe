import styles from "./game.module.scss"
import { Cell } from "./components/cell"
import { store } from "./store"
import { PLAYER_SIGN } from "./constants/player_signs"

const GameLayout = ({ field, player, winner }) => {
	console.log("winner in GameLayout", winner)
	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return (
		<>
			{winner === null && <p>Now playing: {PLAYER_SIGN[player]}</p>}
			<div className={styles.game}>{fieldElems}</div>
			{/* {winner !== null && <div>Winner: {PLAYER_SIGN[winner]}</div>} */}
			{winner !== null && <div>Winner: {winner === 0 ? "CROSS" : "NOUGHTS"}</div>}
			<button onClick={() => store.dispatch({ type: "reset" })}>Start over</button>
		</>
	)
}

export { GameLayout }
