import { configureStore } from "@reduxjs/toolkit";
import openDaymodal from "./reducer/openDaymodal";

const store = configureStore({
    reducer: {
        openDaymodal,
    }
})

export default store;