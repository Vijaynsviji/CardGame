
import { Link } from "react-router-dom";

function NavBarCard({icon,CardName,selected,path,setSelected}){
    const isSelected = CardName===selected;
    const selectedClassName = isSelected ? 'bg-[#1a222f]' : "opacity-50"
    return <>
    <Link to={path} onClick={()=>setSelected(CardName)}>
    <div className={"flex flex-row gap-[10px] p-[10px] hover:bg-[#1a222f] hover:opacity-100 cursor-pointer  rounded-md " + selectedClassName}>
        {icon}
        <p className="text-(--Text-color)">{CardName}</p>
    </div>
    </Link>
    </>
}

export default NavBarCard;