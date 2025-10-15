import NavBarCard from "./NavBarCard";

function NavComp ({barContent,selected,setSelected}){
    return (
        <div className='flex flex-col gap-1'> 
        {barContent.map((item)=><NavBarCard key={item.ID} setSelected={setSelected} selected={selected} CardName={item?.Name} icon={item.icon} path={item?.path}/>)}
      </div>
    );
}

export default NavComp;