import { getRandomAvatarImage, getRandomGameImage } from "../../Utils/Images";
import { AvatarGroup,Avatar } from "@mui/material";


function GameCard ({GameObject,onClick}){

    return  (
    <div onClick={onClick} class="p-[5px] glass lg:max-h-[350px] lg:flex max-w-sm flex-[1_1_200px] bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <img
    src={GameObject?.gameImageUrl}
    alt="Card Image"
    class="w-full lg:h-[100%] h-48 object-cover rounded-[10px]"
  />

  <div class="p-4 flex flex-col justify-between">
    <div>
      <h2 class="text-lg font-semibold mb-2">{GameObject?.gameName}</h2>
      <p class="text-sm text-gray-300">
        This is a description of the card. It stays consistent even if the image is large or small.
      </p>
    </div>
    
    <AvatarGroup max={4}>
    { GameObject?.players?.map(item=><Avatar key={item?.ID} alt={item?.userName} src={item?.ImageUrl}/> )}
     </AvatarGroup>
      
  </div>
     
</div>
);
}

export default GameCard;