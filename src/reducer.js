// import { createStore } from "redux"
// import { configureStore } from "@reduxjs/toolkit"

const initialState = Array(9).fill("NOBODY")

const gameReducer = (state = initialState, action) => {
	console.log(action)
	console.log(state)

	switch (action.type) {
		case "fill_cell":
			console.log("filling cell")
			console.log("payload: ", action.payload)
			const newState = [...state]
			newState[action.payload] = "changed"
			return newState
			break

		default:
			return state
	}
}

// export { gameReducer }
const reducer = {
	game: gameReducer,
}
export { reducer }
