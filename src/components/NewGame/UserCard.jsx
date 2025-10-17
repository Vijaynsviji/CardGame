import { TextField } from "@mui/material";
import { getRandomAvatarImage } from "../../Utils/Images";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';




function UserCard ({UserDetails,changeUserDetails,type="Add",AddNewUser=()=>{}}){
    const ImageUrl = UserDetails?.ImageUrl;





    if(type=="Add"){
        return          <div onClick={()=>AddNewUser()} class="p-[5px] glass lg:max-h-[350px] flex justify-center items-center flex-col max-w-sm flex-[1_1_150px] md:flex-[0_1_150px] bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <AddCircleOutlineIcon sx={{fontSize:'120px',color:'gray'}} />
                </div>
    }
   
    return (
         <div class="p-[5px] relative glass lg:max-h-[350px] lg:flex flex-col max-w-sm flex-[1_1_150px] md:flex-[0_1_150px] bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                        src={ImageUrl}
                        alt="Card Image"
                        class="w-full lg:h-[100%] h-48 object-cover rounded-[10px]"
                    />
                    <div className="absolute top-[50%] inset-0 bg-black/40">
                        <input onChange={(e)=>changeUserDetails(e.target.value,UserDetails.ID)} value={UserDetails?.userName} type="text" className="absolute z-10 w-2/3 text-center h-[100%] w-[100%]  text-lg bg-transparent border-none outline-none custom-caret"/>
                    </div>
                    
                </div>
    );
}

export default UserCard;