import { TableIcon } from "../../Utils/IconUtils";
import BoardCard from "./boardCard";
import TableRowsIcon from '@mui/icons-material/TableRows';
import BoardMobile from "./boardMobile";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {updateUserScore,finishGame} from '../store/gameslice';

import Button from '@mui/material/Button';
import { AlertComp } from "../../Utils/Alert";
import { useNavigate, useParams } from "react-router-dom";



function LeaderBoard ({Users,type=""}){
    const [userScoreObj,setUserScoreObj] = useState({});
    const [showAlert,setShowAlert] = useState(false);
    const [showSaveAlert,setShowSaveAlert] = useState(false);
    const [showGameFinishAlert,setShowGameFinishAlert] = useState(false);
    const [gameFinishAlert,setGameFinishAlert] = useState(false);
    const {id} = useParams();
     const dispatch = useDispatch()
     const navigate = useNavigate();

    function handleUserScoreInput(key,value){
        setUserScoreObj(prev=>{
            return {...prev,[key]:+value}
        })
    }

    function onSave (){
        const payload = {
            id: id,
            scoreObj: userScoreObj
        }
        dispatch(updateUserScore(payload));
        setUserScoreObj({});
        setShowAlert(false);
        setShowSaveAlert(true);

    }

    function HandleFinish (){
        const payload = {
            gameId: id
        }
        dispatch(finishGame(payload));
        setShowGameFinishAlert(false);
        setGameFinishAlert(true);
        setTimeout(()=>{
            navigate('/');
        },2000)
    }


    return (
        <div className="md:border flex flex-col gap-[20px] border-[#5b6377] border-solid md:rounded-[20px] rounded-[5px] md:p-[25px] w-full">
            <div  className="flex items-center gap-[20px]">
                <div className="hidden md:block">{TableIcon}</div>
                <p className="text-color[#8a94a8] text-[20px] md:text-[23px]">ScoreBoard</p>
            </div>
            <div className="hidden md:flex flex-col gap-[10px]">
                {[...Users].sort((a,b)=>a?.currentScore-b?.currentScore).map((item,index)=><BoardCard disabled={type=="view"} key={item?.ID} index={index} user={item} handleUserScoreInput={handleUserScoreInput}/>)}
            </div>
            <div className="md:hidden flex flex-col gap-[10px]">
                {[...Users].sort((a,b)=>a?.currentScore-b?.currentScore).map((item,index)=><BoardMobile disabled={type=="view"} Index={index} handleUserScoreInput={handleUserScoreInput} key={item?.ID} user={item}/>)}
            </div>
            <div className="flex gap-[10px]">
            <Button disabled={type=="view"} className="pt-[10px]" style={{backgroundColor: '#028458'}} onClick={()=>{setShowAlert(true)}} variant="contained">Save</Button>
            <Button disabled={type=="view"} className="pt-[10px]" style={{backgroundColor: '#028458'}} onClick={()=>{setShowGameFinishAlert(true)}} variant="contained">Finish Game</Button>
            </div>
            <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} onSave={()=>onSave()} message="Do you want to save?" />
            <AlertComp showAlert={showSaveAlert} setShowAlert={setShowSaveAlert} type={"info"}  message="User Score Saved Successfully!" />
            <AlertComp showAlert={gameFinishAlert} setShowAlert={setGameFinishAlert} type={"info"}  message="Game is Finished Successfully!" />
            <AlertComp showAlert={showGameFinishAlert} setShowAlert={setShowGameFinishAlert} onSave={()=>HandleFinish()} message="Do you want to Finish this game?" />

        </div>
    );
}

export default LeaderBoard;