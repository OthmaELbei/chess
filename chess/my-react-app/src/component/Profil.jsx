import './Profil.css'

import { CgProfile } from "react-icons/cg";
import Header from './header/Header';
import photo_prof from '../assets/profil.jpg'
import { MdAddAPhoto } from "react-icons/md";
import { IoCloudDownloadSharp } from "react-icons/io5";

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
               <div className='profil grid grid-cols-1  '>
                    <div className= ' print_imag flex items-center justify-center'>
                        <div className="prints relative ">
                        <img className=' prfil_photo rounded-[50%] m-2 w-20 h-20' src={photo_prof} alt="" />
                        <MdAddAPhoto className='  absolute icon text-[#C9A126]'/>
                        </div>
                
                    </div>
                    <div className='texts flex items-center justify-center '>
                        <h6>change Profile Picture</h6>
                    </div>
                    <div  className=' text_p flex items-center justify-center '>
                        <p>
                        Drag and drop your grandmaster
                        portrait here, or tap browse
                         </p>
                    </div>
                    <div className='type_image flex items-center justify-center'>
                        <h6>PNG / JPG</h6>
                        <h6>MAX 5MB</h6>
                    </div>
                    <div  className=' buttons flex items-center justify-center'>
                        <button  className=' flex  items-center ' > <IoCloudDownloadSharp className='m-2' /> Browse Device</button>
                    </div>
                </div> 
                </div>
            </div>
        </div>
    </>);

}