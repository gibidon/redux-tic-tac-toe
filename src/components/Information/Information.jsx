import styles from "./information.module.scss"

export const Information = ({ status, winner, player }) => {
	return (
		<div className={styles.information}>
			<p>Status: {status}</p>
			{winner !== null && <div>Winner: {winner === 0 ? "CROSS" : "NOUGHTS"}</div>}
		</div>
	)
}
