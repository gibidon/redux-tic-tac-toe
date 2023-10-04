import { store } from "./store"

function fill_cell(index) {
	return { type: "fill_cell", payload: index }
}

const bound_fill_cell = (index) => store.dispatch(fill_cell(index))

export { bound_fill_cell }
