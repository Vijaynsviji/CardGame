import { Avatar,TextField } from "@mui/material";
import {TextFieldStyle} from "../NewGame/Newgame"
import UndoIcon from '@mui/icons-material/Undo';
import {debounce} from "../../Utils/Debounce"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AlertComp } from "../../Utils/Alert";
import { undoUserScore } from "../store/gameslice";
let timer = null;

function BoardCard({user,index,handleUserScoreInput,disabled}){
    const [showAlert,setShowAlert] = useState(false);
    const {id} = useParams();
    const dispatch = useDispatch()
     const handleSearch = debounce((ID,text) => {
            handleUserScoreInput(ID,text);
            }, 500);
        const handleUndo = ()=>{
                const payload = {
                    id: id,
                    userId: user.ID
                }
                dispatch(undoUserScore(payload));
                setShowAlert(false);
            }
    return (
        <div className="bg-[#1e293c] rounded-[20px] p-[15px_25px] flex items-center gap-[50px]">
            <div className="flex items-center">
                    <div class="text-[26px] text-[#737e91] font-extrabold md:w-[50px] md:h-[50px] p-[10px] rounded-full flex items-center justify-center border-2 border-[#737e91]">
                        {index+1}
                    </div>
            </div>
            <div className="flex gap-[30px] flex-[1_1_auto] items-center">
                <Avatar sx={{padding:'5px',border:'1px solid #8a94a8',borderRadius:'7px',height:80,width:80}} variant="square" alt={user?.userName} src={user?.ImageUrl} />
                <div>
                    <p className="text-[30px] text-gray-300">{user?.userName}</p>
                </div>
                <div className="text-[20px] font-extrabold text-[#555e9c] flex-[1_1_auto] text-right">
                        {user?.currentScore || 0}
                </div>
            </div>
            
            <div className="flex-[1_1_auto] gap-[10px] items-center justify-end flex">
                {!disabled && <div><UndoIcon  onClick={()=>{setShowAlert(true)}}  /></div>}
                {!disabled &&<TextField onChange={(e)=>handleSearch(user?.ID,e.target.value)} sx={TextFieldStyle} id="outlined-basic" variant="outlined" />   } 
                <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} onSave={()=>{handleUndo()}}/>
                    
            </div>
        </div>
    );
}


export default BoardCard;