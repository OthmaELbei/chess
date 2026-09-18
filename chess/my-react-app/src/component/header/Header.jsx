import photo from '../../assets/logo 13.png'
import photo_prof from '../../assets/profil.jpg'
import { BiBell } from "react-icons/bi";

export default function Header()
{
    return(
    <>
        <div className="header flex items-center justify-between">
            <div className='flex  font-bold items-center content-center'>
                <img className='w-8 h-8' src={photo} alt="" />
                <span  className="logo text-2xl text-bold text-[#C9A126]">2Chess</span>
            </div>
             
           <div className="flex items-center   content_image_profile">
                <BiBell className='m-6 text-2xl text-[#C9A126]'/>
                <img className='rounded-[50%] m-2 w-8 h-8' src={photo_prof} alt="" />
            </div>
        </div>
    </>
    );
}