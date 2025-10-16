import { TableIcon } from "../../Utils/IconUtils";
import BoardCard from "./boardCard";
import TableRowsIcon from '@mui/icons-material/TableRows';



function LeaderBoard ({Users}){
    return (
        <div className="border border-[#5b6377] border-solid rounded-[20px] md:p-[25px] w-full">
            <div  className="flex items-center pb-[20px] gap-[20px]">
                {TableIcon}
                <p className="text-color[#8a94a8] text-[23px]">ScoreBoard</p>
            </div>
            {Users.map(item=><BoardCard key={item?.ID} user={item}/>)}
        </div>
    );
}

export default LeaderBoard;