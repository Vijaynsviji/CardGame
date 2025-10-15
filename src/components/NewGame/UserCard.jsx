import { TextField } from "@mui/material";
import { getRandomAvatarImage } from "../../Utils/Images";



function UserCard (){
    
    return (
         <div class="p-[5px] glass lg:max-h-[350px] lg:flex flex-col max-w-sm flex-[0_1_150px] bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                        src={getRandomAvatarImage()}
                        alt="Card Image"
                        class="w-full lg:h-[100%] h-48 object-cover rounded-[10px]"
                    />
                    <div className="absolute top-[50%] inset-0 bg-black/40">
                        <input type="text" className="relative z-10 w-2/3 text-center text-transparent text-lg bg-transparent border-none outline-none custom-caret"/>
                    </div>
                    
                </div>
    );
}

export default UserCard;