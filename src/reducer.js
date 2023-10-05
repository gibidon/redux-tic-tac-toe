import { createEmptyField } from "./utils/create-empty-field"

const initialState = {
	field: createEmptyField(),
	player: "X",
	winner: "",
	status: "ON",
}
const getNewPlayer = (player) => {
	return player === "X" ? "O" : "X"
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "fill_cell":
			let newField = [...state.field]
			newField[action.payload] = state.player
			return { ...state, field: newField, player: getNewPlayer(state.player) }
		case "set_status_off":
			return { ...state, status: "OFF" }
		case "set_winner":
			return { ...state, winner: action.payload }
		case "reset":
			return { ...state, ...initialState }
		default:
			return state
	}
}

const reducer = {
	game: gameReducer,
}
export { reducer }
