import { GameLayout } from "./game-layout"
import { store } from "./store"

function Game() {
	const storeData = store.getState()
	console.log("game store: ", storeData)
	window.store = store
	return <GameLayout field={storeData.game} />
}

export { Game }
