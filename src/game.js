import { useState } from "react"
import { Field } from "./components/Field/Field"
import { Information } from "./components/Information/Information"
import { store } from "./store"
import styles from "./game.module.scss"

export const Game = () => {
	let [gameData, setGameData] = useState([])
	gameData = store.getState().game

	const { field, player, winner, status } = gameData

	//Refresh state in this component when store is changed
	store.subscribe(() => {
		setGameData(store.getState().game)
	})

	return (
		<div className={styles.container}>
			<Information status={status} winner={winner} player={player} />
			<Field field={field} player={player} winner={winner} status={status} />
			<button
				className={styles.resetBtn}
				onClick={() => store.dispatch({ type: "RESET" })}
			>
				Start over
			</button>
		</div>
	)
}
