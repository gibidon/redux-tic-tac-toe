import { GameLayout } from "./game-layout"
import { store } from "./store"

function Game() {
	const field = store.getState()
	console.log("field store: ", field)
	window.store = store
	return <GameLayout field={field} />
}

export { Game }
