import { createSlice } from "@reduxjs/toolkit"
const initialState = {
	field: Array(9).fill("NOBODY"),
	player: true,
}

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		fill_cell(state, action) {
			let filled_cell = state.field.find((cell) => cell.id === action.payload.id)
			// filled_cell = action.payload?
			filled_cell = "changed!!"
			state.player = !state.player
		},
		change_player(state, action) {
			state.player = !state.player
		},
	},
})

export const { fill_cell, change_player } = gameSlice.actions
export default gameSlice.reducer
