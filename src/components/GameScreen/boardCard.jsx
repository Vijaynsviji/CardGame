import { Avatar,TextField } from "@mui/material";
import {TextFieldStyle} from "../NewGame/Newgame"
import UndoIcon from '@mui/icons-material/Undo';
function BoardCard({user}){
    return (
        <div className="bg-[#1e293c] rounded-[20px] p-[15px_25px] flex items-center gap-[50px]">
            <div className="flex items-center">
                    <div class="text-[26px] text-[#737e91] font-extrabold md:w-[50px] md:h-[50px] p-[10px] rounded-full flex items-center justify-center border-2 border-[#737e91]">
                        1
                    </div>
            </div>
            <div className="flex gap-[30px] flex-[1_1_auto] items-center">
                <Avatar sx={{padding:'5px',border:'1px solid #8a94a8',borderRadius:'7px',height:80,width:80}} variant="square" alt={user?.userName} src={user?.ImageUrl} />
                <div>
                    <p className="text-[30px] text-gray-300">{user?.userName}</p>
                </div>
                <div className="text-[20px] font-extrabold text-[#555e9c] flex-[1_1_auto] text-right">
                        {user?.Score || 0}
                </div>
            </div>
            
            <div className="flex-[1_1_auto] justify-end flex">
                <div><UndoIcon /></div>
                <TextField onChange={(e)=>debounceFunction("gameName",e.target.value)} sx={TextFieldStyle} id="outlined-basic" variant="outlined" />    
            </div>
        </div>
    );
}


export default BoardCard;