import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: {}, // 동기적으로 상태변경할 때 사용
    extraReducers: (builder) => {
        builder
            .addCase(fetchMultiplePokemonById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMultiplePokemonById.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
    } // 비동기적으로 상태 변경할 때 사용
})

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        addToFavorite(state, action) { state.push(action.payload.pokemonId) },
        removeFromFavorite(state, action) {
            const index = state.indexOf(action.payload.pokemonId);

            if(index !== -1) state.splice(index, 1)
        }
    }
})