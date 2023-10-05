// import { legacy_createStore as createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"
// import gameReducer from "./features/gameSlice"

// const store = configureStore({ reducer: { gameX: gameReducer } })
const store = configureStore({ reducer: reducer })
// const store = configureStore(gameReducer)

console.log(store)

export { store }
