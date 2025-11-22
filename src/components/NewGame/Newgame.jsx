import { useEffect } from "react";
import { useState } from "react";
import { getRandomGameImage } from "../../Utils/Images";
import { getRandomAvatarImage } from "../../Utils/Images";
import { TextField } from "@mui/material";
import UserCard from "./UserCard";
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';

import { useSelector, useDispatch } from 'react-redux'

import {addNewGame, updateGame} from '../store/gameslice';

import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";


export const TextFieldStyle = {
    input: {
        color: "#fff", // input text color
    },
    "& .MuiInputLabel-root": {
        color: "#bbb", // label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#00e5ff", // label color when focused
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#555", // default border
        },
        "&:hover fieldset": {
            borderColor: "#888", // hover border
        },
        "&.Mui-focused fieldset": {
            borderColor: "#00e5ff", // focus border
            boxShadow: "0 0 5px #00e5ff", // glow effect
        },
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    },
}

let timer = null;
let newTimer = null;


function Newgame({isEdit=false}) {
    const [GameDetails, setGameDetails] = useState({
        ID: uuidv4(),
        gameName: "",
        gameImageUrl: getRandomGameImage(),
        maxPoint: 0,
    })
    const allGameList = useSelector((state) => state.game.gameList);
    const {id} = useParams();

    const [UserDetails, setUserDetails] = useState([{
        ID: 1,
        userName: "",
        ImageUrl: getRandomAvatarImage(),
                currentScore: 0,
        scoreAddedList: []
    }]);

    const navigate = useNavigate();

    useEffect(()=>{
        if(isEdit){
            const game = allGameList.filter(item=>item?.ID===id)?.[0];
            if(game){
                 setGameDetails({
                ID: game?.ID,
                gameName: game?.gameName,
                gameImageUrl:game?.gameImageUrl,
                maxPoint: game?.maxPoint
            });
                setUserDetails(game?.players);
            }
        }
    },[isEdit])


    const [isloading,setIsLoading] = useState(false);

     const dispatch = useDispatch()


     function clearForm(){
        setGameDetails({
        ID: uuidv4(),
        gameName: "",
        gameImageUrl: getRandomGameImage(),
        maxPoint: 0,
    })
    setUserDetails([{
        ID: 1,
        userName: "",
        ImageUrl: getRandomAvatarImage(),
        currentScore: 0,
        scoreAddedList: []
    }])
     }

    function changeUserDetails(newUser, ID) {
        console.log(newUser);
        setUserDetails(prev => {
            return prev.map(item => {
                if (item.ID == ID) {
                    return { ...item, userName: newUser };
                }
                return item;
            }
            )
        })
    }

    function debounceFunction (key,value){
        
        clearTimeout(timer);
        timer = setTimeout(()=>{
            handleGameDetailChange(key,value);
        },500);
        
    }

    

    function handleGameDetailChange (key, value){
        console.log(value);
        setGameDetails(prev=>{
            return {...prev,[key]:value};
        })
    }


    function AddNewUser() {
        setUserDetails(prev => [...prev, {
            ID: prev.length + 1,
            userName: "",
            ImageUrl: getRandomAvatarImage(),
            currentScore: 0,
            scoreAddedList: []
        }])
    }

    function createNewGame (){
        setIsLoading(true);
        const newGameTemplate = {
            ...GameDetails,players: UserDetails,status:"inProgress"
        }

        dispatch(addNewGame(newGameTemplate));
        setTimeout(()=>{
            setIsLoading(false);
            clearForm();
        },2000);

    }

    function editGame (){
        setIsLoading(true);
        const newGameTemplate = {
            ...GameDetails,players: UserDetails,status:"inProgress"
        }

        dispatch(updateGame(newGameTemplate));
        setTimeout(()=>{
            setIsLoading(false);
            clearForm();
            setTimeout(()=>{

                navigate("/");
            },1000)
        },2000);
    }





    return (
    <div className="flex flex-col w-full bg-[#0f172b] p-[20px] gap-[30px]">
        <div className="flex justify-between">
            {!isEdit && <>
            <p className="text-(--Text-color)  text-2xl">New Game</p>
            {!isloading?<Button style={{backgroundColor: '#028458'}} onClick={()=>{createNewGame()}} variant="contained">Create</Button>
            :<Alert variant="filled" severity="success">
                Game Created Successfully
            </Alert>}
            </>}

            {isEdit && <><p className="text-(--Text-color)  text-2xl">Edit Game</p>{!isloading ? <Button style={{backgroundColor: '#028458'}} onClick={()=>{editGame()}} variant="contained">Edit</Button>
            :<Alert variant="filled" severity="success">
                Game Edited Successfully
            </Alert>}</>  }
        </div>
       
        <div className=" bg-[#0f172b] md:gap-[50px] flex flex-col md:flex md:flex-row w-full text-white gap-[10px]  overflow-hidden">
                <div className="flex-[0_1_400px] glass ">
                    <img
                        src={GameDetails.gameImageUrl}
                        alt="Card Image"
                        class="w-full lg:h-[100%] object-cover rounded-[10px]"
                    />
                </div>
               
            <div className="flex flex-col flex-[1_1_150px]">
                <div className="flex flex-[1_1_150px] flex-col gap-[20px]">
                    <TextField onChange={(e)=>handleGameDetailChange("gameName",e.target.value)} InputLabelProps={{ shrink: true }}  value={GameDetails?.gameName} sx={TextFieldStyle} id="outlined-basic" label="Title" variant="outlined" />
                    <TextField onChange={(e)=>handleGameDetailChange("maxPoint",e.target.value)} InputLabelProps={{ shrink: true }}  value={GameDetails?.maxPoint} sx={TextFieldStyle} id="outlined-basic" label="Enter Max Points" variant="outlined" type="number" />
                </div>
                <div className='overflow-auto flex flex-row flex-wrap gap-[20px] [&::-webkit-scrollbar]:hidden scrollbar-none'>
                    {
                        UserDetails.map(user => {
                            return <UserCard key={user.ID} UserDetails={user} type={"User"} changeUserDetails={changeUserDetails} />
                        })
                    }
                    <UserCard UserDetails={{}} AddNewUser={AddNewUser} />
                </div>
            </div>
            

        </div>
    </div>
    );
}

export default Newgame;