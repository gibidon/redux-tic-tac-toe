import { bound_fill_cell } from "../actions"

export const Cell = ({ content, index }) => {
	return (
		<div className="cell">
			{content}
			<button onClick={() => bound_fill_cell(index)}>submit</button>
		</div>
	)
}
