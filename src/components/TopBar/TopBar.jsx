import { useState } from "react";
import { MenuIcon, SideBarAppLogo } from "../../Utils/IconUtils";
import Panel from "../../Utils/Panel";
import AppLogo from "../CompUtils/AppLogo";
import UserCard from "../CompUtils/UserCard";
import SideBar from "../SideBar/SideBar";


function TopBar (){
    const [showPanel,setShowPanel] = useState(false);
    return (
        <div className="bg-[#0f172b] w-[100%] md:hidden flex flex-row justify-between items-center px-[13px] py-[19px]">
            <AppLogo SideBarAppLogo={SideBarAppLogo}/>
            <div className="flex flex-row items-center gap-[10px]">
                <div className="border border-gray-500 rounded-[50%] p-[5px]" onClick={()=>setShowPanel(prev=>!prev)}>
                     {MenuIcon}
                </div>
                <UserCard />
            </div>
            <Panel isOpen={showPanel} onDismiss={()=>setShowPanel(false)} >
                <SideBar isTopBar={true} />
            </Panel>
        </div>
    );
}

export default TopBar;