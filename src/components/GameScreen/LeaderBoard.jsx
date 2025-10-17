import { TableIcon } from "../../Utils/IconUtils";
import BoardCard from "./boardCard";
import TableRowsIcon from '@mui/icons-material/TableRows';
import BoardMobile from "./boardMobile";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {updateUserScore} from '../store/gameslice';

import Button from '@mui/material/Button';
import { AlertComp } from "../../Utils/Alert";
import { useParams } from "react-router-dom";



function LeaderBoard ({Users}){
    const [userScoreObj,setUserScoreObj] = useState({});
    const [showAlert,setShowAlert] = useState(false);
    const [showSaveAlert,setShowSaveAlert] = useState(false);
    const {id} = useParams();
     const dispatch = useDispatch()

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
    return (
        <div className="md:border flex flex-col gap-[20px] border-[#5b6377] border-solid md:rounded-[20px] rounded-[5px] md:p-[25px] w-full">
            <div  className="flex items-center gap-[20px]">
                <div className="hidden md:block">{TableIcon}</div>
                <p className="text-color[#8a94a8] text-[20px] md:text-[23px]">ScoreBoard</p>
            </div>
            <div className="hidden md:block">
                {Users.map(item=><BoardCard key={item?.ID} user={item}/>)}
            </div>
            <div className="md:hidden">
                {Users.map(item=><BoardMobile handleUserScoreInput={handleUserScoreInput} key={item?.ID} user={item}/>)}
            </div>
            <div>
            <Button className="pt-[10px]" style={{backgroundColor: '#028458'}} onClick={()=>{setShowAlert(true)}} variant="contained">Save</Button>
            </div>
            <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} onSave={()=>onSave()} message="Do you want to save?" />
            <AlertComp showAlert={showSaveAlert} setShowAlert={setShowSaveAlert} type={"info"}  message="User Score Saved Successfully!" />

        </div>
    );
}

export default LeaderBoard;