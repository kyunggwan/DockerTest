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

let vehicle = createSlice({
    name: 'vehicle',
    initialState: [],
    reducers: {
        getVehicleList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})

let gps = createSlice({
    name: 'gps',
    initialState: [],
    reducers: {
        getGpsList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})

let oil = createSlice({
    name: 'oil',
    initialState: [],
    reducers: {
        getOilList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})


export default configureStore({
    reducer: {
        drive: drive.reducer,
        vehicle: vehicle.reducer,
        gps: gps.reducer,
        oil: oil.reducer
    }
})
export let { getDriveList } = drive.actions
export let { getVehicleList } = vehicle.actions
export let { getGpsList } = gps.actions
export let { getOilList } = oil.actions

