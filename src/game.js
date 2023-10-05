import { useState } from "react"
import { GameLayout } from "./game-layout"
import { store } from "./store"
import { checkEmptyCell } from "./utils/check-empty-cell"

function Game() {
	let [gameData, setGameData] = useState([])
	gameData = store.getState().game
	console.log("gameData in game component: ", gameData)

	const { field, player, winner, status } = gameData
	window.store = store
	// checkWinner
	// checkEmptyCell

	store.subscribe(() => {
		setGameData(store.getState().game)
	})

	return <GameLayout field={field} player={player} winner={winner} />
}
export { Game }
