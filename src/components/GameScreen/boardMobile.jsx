import { Avatar,TextField,Snackbar,Button,IconButton } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import React from "react";

import {AlertComp} from '../../Utils/Alert';

import {debounce} from "../../Utils/Debounce"



const TextFieldStyle = {
    input: {
        color: "#fff", // input text color
    },
    "& .MuiInputLabel-root": {
        color: "#bbb", // label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#00e5ff", // label color when focused
    },
     "& .MuiOutlinedInput-input": {
              height: "7px", // Adjust as needed
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

function BoardMobile({user,handleUserScoreInput}){
    const [showAlert,setShowAlert] = useState(false);


    const handleSearch = debounce((ID,text) => {
        handleUserScoreInput(ID,text);
        }, 500);


    return (
        <div className="bg-[#1e293c] rounded-[5px] p-[10px 5px] p-[0px_3px] flex items-center gap-[10px]">
            <div className="flex items-center">
                    <div class="text-[15px] text-[#737e91] font-extrabold md:w-[50px] md:h-[50px] p-[5px] rounded-full flex items-center justify-center ">
                        1
                    </div>
            </div>
            <div className="flex gap-[15px] flex-[1_1_auto] items-center">
                <Avatar sx={{padding:'5px',border:'1px solid #8a94a8',borderRadius:'7px'}} variant="square" alt={user?.userName} src={user?.ImageUrl} />
                <div>
                    <p className="text-[15px] whitespace-nowrap text-gray-300">{user?.userName}</p>
                    <div className="text-[20px] font-extrabold text-[#555e9c] flex-[1_1_auto]">
                         {user?.currentScore || 0}
                    </div>
                </div>
            </div>
            
            <div className="flex-[1_1_auto] gap-[10px] justify-end flex p-[10px] items-center">
                <div><UndoIcon onClick={()=>{setShowAlert(true)}} /></div>
                <TextField onChange={(e)=>handleSearch(user?.ID,e.target.value)} style={{width:'50%', height:'60%'}} sx={TextFieldStyle} id="outlined-basic" type="number" variant="outlined" />    
            </div>

            <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} onSave={()=>{setShowAlert(false)}}/>
        </div>
    );
}

export default BoardMobile;