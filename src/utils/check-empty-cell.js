import { PLAYER } from "../constants/player"
import { store } from "../store"

export const checkEmptyCell = (field) => {
	// let { field } = store.getState().game
	return field.some((cellContent) => cellContent === PLAYER.NOBODY)
	// if (field.some((cellContent) => cellContent === PLAYER.NOBODY)) {
	// 	store.dispatch({ type: "set_status_off" })
	// }
}
