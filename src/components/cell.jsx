import styles from "./cell.module.scss"
import { store } from "../store"
import { checkEmptyCell } from "../utils/check-empty-cell"
import { checkWin } from "../utils/check-winner"
import { PLAYER } from "../constants/player"
import { PLAYER_SIGN } from "../constants/player_signs"

const handleCLick = (index) => {
	store.dispatch({ type: "fill_cell", payload: index })
}

export const Cell = ({ content, index }) => {
	console.log("content", content)
	const { field, status, winner } = store.getState().game

	return (
		<button
			className={styles.cell}
			onClick={() => {
				if (status === "OFF" || winner || content !== PLAYER.NOBODY) {
					return
				} else {
					if (checkEmptyCell(field)) {
						handleCLick(index)
						// checkWin()
					}
				}
			}}
		>
			{/* {content} */}
			{PLAYER_SIGN[content]}
		</button>
	)
}
