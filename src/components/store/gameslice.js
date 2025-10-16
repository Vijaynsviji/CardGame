import { createSlice } from '@reduxjs/toolkit'


const newGame = {
    gameList: JSON.parse(localStorage.getItem("GameList")) || [],
}

export const GameSlice = createSlice({
    name:'gameSlice',
    initialState:newGame,
    reducers: {
        addNewGame: (state,action)=>{
            state.gameList.push(action.payload);
            localStorage.setItem("GameList",JSON.stringify(state.gameList));
        }
    }
})

export const { addNewGame } = GameSlice.actions

export default GameSlice.reducer