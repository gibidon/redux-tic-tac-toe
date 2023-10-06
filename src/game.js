import { useState } from "react"
import { PLAYER } from "./constants/player"
import { GameLayout } from "./game-layout"
import { store } from "./store"
import { checkEmptyCell } from "./utils/check-empty-cell"
import { checkWin } from "./utils/check-winner"

function Game() {
	let [gameData, setGameData] = useState([])
	gameData = store.getState().game
	console.log("gameData in game component: ", gameData)

	const { field, player, winner, status } = gameData
	window.store = store
	// checkWinner
	// checkEmptyCell
	console.log("fp: ", field, player)

	if (status === "ON") {
		// checkEmptyCell(field)
		checkWin(field, player === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)
	}

	store.subscribe(() => {
		setGameData(store.getState().game)
	})

	return <GameLayout field={field} player={player} winner={winner} />
}
export { Game }
