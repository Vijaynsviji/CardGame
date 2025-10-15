
import Persona from '../../Utils/Persona';
function UserCard (){
    return <div className='flex flex-row gap-[10px] items-center  gap-[20px]'>
        <Persona />
        <p className='text-(--Text-color) text-xl hidden md:flex'>Vijay N S</p>
      </div>
}

export default UserCard;