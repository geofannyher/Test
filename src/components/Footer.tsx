import logo from '../../public/images/logo.png'
import call from '../../public/call.svg'
import maps from '../../public/location-tick.svg'
import note from '../../public/note.svg'
import fb from '../../public/fb.svg'
import youtube from '../../public/yt.svg'
import link from '../../public/lk.svg'
import ig from '../../public/instagram.svg'
export const Footer = () => {
    return (
        <div className="w-full bg-secondBg" >
            <div className="container mx-auto p-10">
                <div className='grid grid-cols-12 gap-8'>
                    <div className="col-span-6">
                        <img src={logo} />
                        <div className='flex flex-col gap-5 py-10 text-white text-sm md:text-base lg:text-base'>
                            <div className='flex items-center gap-2'>
                                <img src={maps} />
                                <div className='tracking-normal'>
                                    <p>
                                        Jl. Terusan Jakarta No.76, Antapani
                                    </p>
                                    <p>
                                        Tengah, Bandung, Jawa Barat, 40291
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={call} />
                                <h1>
                                    +62 356 7829 873
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={note} />
                                <h1>
                                    elkopra@gmail.com
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 flex flex-col md:flex-row lg:flex-row justify-around md:justify-between lg:justify-between text-white text-sm md:text-base lg:text-base">
                        <div>
                            <div className='font-semibold pb-5 md:pb-10 lg:pb-10'>
                                <h1>Company</h1>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    About Us
                                </p>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    Career
                                </p>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    Contact Us
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='hidden md:block lg:block font-semibold pb-10'>
                                <h1>Products</h1>
                            </div>
                            <div className='flex flex-col  gap-5'>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    elKopra
                                </p>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    elRaga
                                </p>
                                <p className='cursor-pointer hover:text-mainBg'>
                                    elResto
                                </p>
                            </div>
                        </div>
                        <div className='hidden md:block lg:block'>
                            <div className='font-semibold pb-10'>
                                <h1>Products</h1>
                            </div>
                            <div className='flex gap-5'>
                                <img className='cursor-pointer' src={link} />
                                <img className='cursor-pointer' src={ig} />
                                <img className='cursor-pointer' src={fb} />
                                <img className='cursor-pointer' src={youtube} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
