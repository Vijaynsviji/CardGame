import { useState } from 'react'
import { SideBarAppLogo, SideBarContentList } from '../../Utils/IconUtils';
import NavComp from '../CompUtils/NavComp';
import AppLogo from '../CompUtils/AppLogo';
import UserCard from '../CompUtils/UserCard';

import { useLocation } from 'react-router-dom';


function SideBar ({isTopBar=false}){
    const barContent = SideBarContentList;
    const location = useLocation();
    const [selected,setSelected] = useState(location.pathname);
    return (
    <div className={(isTopBar?"flex":'hidden')+` min-h-screen sticky top-[0px] bg-[#0e1624] md:w-[25%] md:h-[100%] p-5 md:flex flex-col gap-[30px] justify-between`}>
      <div className='flex flex-col gap-[40px]'>
      <AppLogo SideBarAppLogo={SideBarAppLogo} />
      <NavComp selected={selected} setSelected={setSelected} barContent={barContent} />
       </div>
      < UserCard />
    </div>
    );
}

export default SideBar;