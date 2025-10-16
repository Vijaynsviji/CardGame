import { Avatar } from "@mui/material";
function BoardCard({user}){
    return (
        <div className="bg-[#1e293c] rounded-[20px] p-[15px_25px] flex items-center gap-[50px]">
            <div className="flex items-center">
                    <div class="text-[26px] text-[#737e91] font-extrabold md:w-[50px] md:h-[50px] p-[10px] rounded-full flex items-center justify-center border-2 border-[#737e91]">
                        1
                    </div>
            </div>
            <div className="flex gap-[10px]">
                <Avatar sx={{padding:'5px',border:'1px solid #8a94a8',borderRadius:'7px'}} variant="square" alt={user?.userName} src={user?.ImageUrl} />
                <div>
                    <p>{user?.userName}</p>
                </div>
            </div>
            <div>
                {user?.Score}
            </div>
            <div></div>
        </div>
    );
}


export default BoardCard;