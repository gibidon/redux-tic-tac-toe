import { WIN_PATTERNS } from "../constants/win-patterns"
import { store } from "../store"

// export const checkWin = () => {
// 	let { field, player } = store.getState().game

// 	if (
// 		WIN_PATTERNS.some((winPattern) =>
// 			winPattern.every((cellIndex) => field[cellIndex] === player)
// 		)
// 	) {
// 		store.dispatch({ type: "set_winner", payload: player })
// 		store.dispatch({ type: "set_status_off" })
// 	}
// }

export const checkWin = (field, player) => {
	// let { field, player } = store.getState().game
	console.log(player)

	if (
		WIN_PATTERNS.some((winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === player)
		)
	) {
		store.dispatch({ type: "set_winner", payload: player })
		store.dispatch({ type: "set_status_off" })
	}
}
