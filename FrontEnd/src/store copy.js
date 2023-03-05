import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let drive = createSlice({
    name: 'drive',
    initialState: [],
    reducers: {
        getDriveList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})

export default configureStore({
    reducer: {
        drive: drive.reducer
    }
})
export let { getDriveList } = drive.actions

