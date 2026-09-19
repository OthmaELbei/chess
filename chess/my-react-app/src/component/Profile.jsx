import photo_prof from '../assets/profil.jpg'
import { MdAddAPhoto } from "react-icons/md";
import { IoCloudDownloadSharp } from "react-icons/io5";


export default function Profile()
{
    return(
        <>
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
                            {/* <div  className=' buttons flex items-center justify-center'>
                                <button  className=' flex  items-center ' > <IoCloudDownloadSharp className='m-2' /> Browse Device</button>
                            </div> */}
                            <div className="flex items-center justify-center mt-2">
                                    <button className="buttons flex items-center gap-2 text-sm text-[#c6ad61] bg-[#4d526291] hover:bg-[#4d5262] px-4 py-2 rounded-lg transition-colors">
                                        <IoCloudDownloadSharp className="text-lg" />
                                        <span>Browse Device</span>
                                    </button>
                            </div>
                        </div> 
        </>
    );
}