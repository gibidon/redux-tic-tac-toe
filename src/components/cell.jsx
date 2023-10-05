// import { bound_fill_cell } from "../actions"
import styles from "./cell.module.scss"
import { fill_cell, change_player } from "../features/gameSlice"
import { store } from "../store"

export const Cell = ({ content, index }) => {
	return (
		<button
			className={styles.cell}
			onClick={() => {
				// fill_cell(index)
				// change_player()
				store.dispatch({ type: "fill_cell", payload: index })
				// store.dispatch(change_player())
				console.log(index)
			}}
		>
			{/* onClick = dispatch */}
			{content}
		</button>
	)
}
