import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SampleDataState {
    loading: boolean,
    data: object
}

export interface ISampleData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const initialState: SampleDataState = {
    loading: false,
    data: {}
}

export const sampleDataSlice = createSlice({
    name: "sampleData",
    initialState,
    reducers: {
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setData: (state, action: PayloadAction<Object>) => {
            state.data = action.payload
        }
    }
})

export const { setData, setLoadingState } = sampleDataSlice.actions

export default sampleDataSlice.reducer
