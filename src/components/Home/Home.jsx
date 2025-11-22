
import Button from '@mui/material/Button';
import GameCard from './GameCard';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router';
// import {Button} from '../../../node_modules/@mui/material/Button';
function Home (){
    const allGameList = useSelector((state) => state.game.gameList);
    const onGoingGames = allGameList.filter(item=>item?.status==undefined || item.status==="inProgress");
    const RecentGames = allGameList.filter(item=>item.status === "Completed");
    let navigate = useNavigate();


    function handleClick (){
        navigate('/newgame')
    }

    function onGameClick(id){
        navigate("/game/"+id);
    }

    function onRecentGameClick(id){
        navigate("/viewgame/"+id);
    }

    return (
        <div className='bg-[#0f172b] w-[100%] overflow-auto p-[20px] flex flex-col gap-[40px]'>  
            <div className='flex flex-col w-[100%] gap-[20px]'>
                <div className='flex justify-between flex-wrap gap-[10px]'>
                    <p className="text-(--Text-color)  text-2xl">On Going Games</p>
                    <div className='flex justify-end'>
                            <Button onClick={()=>{handleClick()}} style={{backgroundColor: '#028458'}} variant="contained">Create New Game</Button>
                    </div>
                </div>
                
                <div className='overflow-auto flex flex-row flex-wrap gap-[20px] [&::-webkit-scrollbar]:hidden scrollbar-none'>
                   { onGoingGames.map(item=><GameCard onClick={()=>onGameClick(item?.ID)} key={item?.ID} GameObject={item} />) 
                    }
                    
                </div>
                
            </div>
            <div className='flex flex-col gap-[20px]'>
                <p className="text-(--Text-color)  text-2xl">Recent Games</p>
                <div className='overflow-auto flex flex-row flex-wrap gap-[20px] [&::-webkit-scrollbar]:hidden scrollbar-none'>
                    { RecentGames.map(item=><GameCard onClick={()=>onRecentGameClick(item?.ID)} key={item?.ID} GameObject={item} />) 
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Home;