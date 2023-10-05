import styles from "./cell.module.scss"
import { store } from "../store"
import { checkEmptyCell } from "../utils/check-empty-cell"
import { checkWin } from "../utils/check-winner"

const handleCLick = (index) => {
	store.dispatch({ type: "fill_cell", payload: index })
}

export const Cell = ({ content, index }) => {
	const { status, winner } = store.getState().game
	console.log("winner in cell: ", winner)
	return (
		<button
			className={styles.cell}
			onClick={() => {
				if (status === "OFF" || winner !== "" || content !== "") {
					return
				} else {
					if (checkEmptyCell) {
						handleCLick(index)
						checkWin()
					}
				}
			}}
		>
			{content}
		</button>
	)
}
