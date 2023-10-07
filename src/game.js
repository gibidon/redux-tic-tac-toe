import { useState } from "react"
import { GameLayout } from "./game-layout"
import { store } from "./store"

export const Game = () => {
	let [gameData, setGameData] = useState([])
	gameData = store.getState().game
	console.log("gameData in game component: ", gameData)

	const { field, player, winner, status } = gameData

	store.subscribe(() => {
		setGameData(store.getState().game)
	})

	return (
		<GameLayout field={field} player={player} winner={winner} status={status} />
	)
}
