import { store } from "../store"

export const checkEmptyCell = () => {
	let { field } = store.getState().game
	return field.some((cellContent) => cellContent === "")
}
