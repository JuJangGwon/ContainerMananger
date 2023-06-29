import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    openDayModal: false,
}

const openDayModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setOn(state) {
            state.openDayModal = true;
        },
        setOff(state) {
            state.openDayModal = false;
        },
    }
})

export default openDayModalSlice.reducer;
export const { setOn, setOff } = openDayModalSlice.actions;