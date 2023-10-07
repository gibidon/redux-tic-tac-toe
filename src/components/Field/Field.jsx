import styles from "./field.module.scss"
import { Cell } from "./components/Cell/cell"

export const Field = ({ field }) => {
	const fieldElems = field.map((cell, index) => (
		<Cell key={index} index={index} content={cell} />
	))

	return <div className={styles.field}>{fieldElems}</div>
}
