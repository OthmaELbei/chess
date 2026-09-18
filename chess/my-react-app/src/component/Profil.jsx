import './Profil.css'

import { CgProfile } from "react-icons/cg";
import Header from './header/Header';
import photo_prof from '../assets/profil.jpg'

export default function Profil()
{
    return(<>
        <div className=" w-full min-h-screen bg-[#0a122a] text-white profile_parent">
            <div className="container mx-auto  p-4 ">
                <Header/>
                <div className='grid crid'>
                <div  className=' flex  content-center justify-between     p-2'>
                    <div  className=' text-[#C9A126] flex content-center '>
                         <CgProfile className='m-1'/>
                         < h6 className='text-[15px]'>profil</h6>
                    </div>
                    <div>
                        <button className='s'> FM Verified</button>
                    </div>
                </div>
                <div className='profil grid grid-cols-1 gap-4 w-full'>
                    <div className='flex items-center justify-center'></div>
                    <img className='  rounded-[50%] m-2 w-20 h-20' src={photo_prof} alt="" />
                </div>
                </div>
            </div>
        </div>
    </>);

}