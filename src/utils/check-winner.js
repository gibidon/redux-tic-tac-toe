import { WIN_PATTERNS } from "../constants/win-patterns"
import { store } from "../store"

export const checkWin = (field, player) => {
	if (
		WIN_PATTERNS.some((winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === player)
		)
	) {
		store.dispatch({ type: "set_winner", payload: player })
		store.dispatch({ type: "set_status_off" })
	}
}
