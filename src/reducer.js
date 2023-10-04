import { createStore } from "redux"

const initialState = Array(9).fill("NOBODY")

const reducer = (state = initialState, action) => {
	console.log(action)

	switch (action.type) {
		case "fill_cell":
			console.log("filling cell")
			console.log("payload: ", action.payload)
			// return state
			const newState = [...state]
			newState[action.payload] = "changed"
			return newState
			break

		default:
			return state
	}
}

export { reducer }
