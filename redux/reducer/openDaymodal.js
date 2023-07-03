import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    openDayModal: false,
}

const openDayModalSlice = createSlice({
    name: "openDayModalSlice",
    initialState,
    reducers: {
        ModalsetOn(state) {
            state.openDayModal = true;
        },
        ModalsetOff(state) {
            state.openDayModal = false;
        },
    }
})

export default openDayModalSlice.reducer;
export const { ModalsetOn, ModalsetOff } = openDayModalSlice.actions;