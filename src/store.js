// import { legacy_createStore as createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"

export const store = configureStore({ reducer: reducer })

// export { store }
