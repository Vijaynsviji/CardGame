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
        },
        updateUserScore: (state,action)=>{

            state.gameList = state.gameList.map(item => {
            if (item.ID === action.payload.id) {
                const updatedPlayers = item.players.map(user => {
                const added = action.payload.scoreObj?.[user.ID] || 0;
                return {
                    ...user,
                    currentScore: (user.currentScore || 0)  + +added,
                    scoreAddedList: [...(user.scoreAddedList || []), +added],
                };
                });
                return { ...item, players: updatedPlayers };
            }
            return item;
            });

            localStorage.setItem("GameList",JSON.stringify(state.gameList));

        },
        undoUserScore: (state,action)=>{
            state.gameList = state.gameList.map(item=>{
                if (item.ID === action.payload.id) {
                        const updatedPlayers = item.players.map(user => {
                            if(user.ID===action.payload.userId){
                                const newScoreArr = [...user.scoreAddedList] || [];
                                const lastScore = newScoreArr?.pop() || 0;
                                return {
                                    ...user,
                                    currentScore: (user.currentScore || 0)  - +lastScore,
                                    scoreAddedList: newScoreArr
                                }
                            }
                            return user
                            
                        });
                        return {...item,players:updatedPlayers};
                }
                return item;
            });

            localStorage.setItem("GameList",JSON.stringify(state.gameList));
        }
    }
})

export const { addNewGame,updateUserScore,undoUserScore } = GameSlice.actions

export default GameSlice.reducer