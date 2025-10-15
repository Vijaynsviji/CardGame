import { useEffect } from "react";
import {useState} from "react";
import { getRandomGameImage } from "../../Utils/Images";
import UserCard from "./UserCard";


function Newgame (){
    const randomImage = getRandomGameImage();
    return (
            <div className="bg-[#0f172b] gap-[50px] flex flex-col w-full text-white  overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex w-[50%]">
                <div className="flex-[0_1_200px] glass lg:max-h-[350px]">
                    <img
                        src={randomImage}
                        alt="Card Image"
                        class="w-full lg:h-[100%] h-48 object-cover rounded-[10px]"
                    />
                </div>
                <div></div>
            </div>
            
            <div className='overflow-auto flex flex-row flex-wrap gap-[20px] [&::-webkit-scrollbar]:hidden scrollbar-none'>
               <UserCard />
               <UserCard />
            </div>
        </div>
    );
}

export default Newgame;