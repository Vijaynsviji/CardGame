import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AvatarGroup,Avatar,Button } from "@mui/material";
import LeaderBoard from './LeaderBoard'

function GameScreen ({type=""}){
    const {id} = useParams();
    const navigate = useNavigate();
    const gameObject = useSelector(
  (state) => state.game.gameList.find(item => item.ID === id)
);;
    // const gameObject =gameObjectList.filter(item=>item.ID===id)?.[0];
    const [isloading,setisloading]=useState(false);

    const handleEditGame = ()=>{
        navigate("/EditGame/" + id)
    }


    return (
        <div className="flex flex-col w-full bg-[#0f172b] md:p-[20px] p-[10px] gap-[30px]">
        <div className="flex justify-between">
             <p className="text-(--Text-color)  text-2xl">{gameObject?.gameName}</p>
            {!isloading?<Button style={{backgroundColor: '#028458'}} onClick={()=>{handleEditGame()}} variant="contained">Edit</Button>
            :<Alert variant="filled" severity="success">
                Game Saved Successfully
            </Alert>}
        </div>
       
        <div className=" bg-[#0f172b] md:gap-[50px] flex flex-col md:flex md:flex-row w-full text-white gap-[10px]  overflow-hidden">
                <div className="flex-[0_1_400px] glass ">
                    <img
                        src={gameObject?.gameImageUrl}
                        alt="Card Image"
                        class="w-full lg:h-[100%] object-cover rounded-[10px]"
                    />
                </div>
               
            <div className="flex flex-col flex-[1_1_150px]">
                <div className='overflow-auto flex flex-row flex-wrap gap-[20px] [&::-webkit-scrollbar]:hidden scrollbar-none'>
                   <LeaderBoard Users={gameObject?.players} type={type}/>
                </div>
            </div>
            

        </div>
    </div>
    );
}

export default GameScreen;