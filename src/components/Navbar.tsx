import logo from '../../public/images/logo.png'
import country from '../../public/images/country.png'
import { Button } from './Button'
import down from '../../public/down.svg'
export const Navbar = () => {
    return (
        <div className='w-full absolute px-3 top-0 z-10 bg-mainBg py-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center text-white'>
                    <img src={logo} />
                    <div className='flex items-center gap-5'>
                        <div className='hidden md:flex md:gap-5 lg:flex lg:gap-5'>
                            <div className='cursor-pointer hover:text-gray-300'>
                                <h1 className='font-semibold'>About Us</h1>
                            </div>
                            <div className='flex gap-3 items-center cursor-pointer hover:text-gray-300'>
                                <h1>Product</h1>
                                <img src={down} className='w-4 h-4' />
                            </div>
                            <div className='cursor-pointer hover:text-gray-300'>
                                <h1>About Us</h1>
                            </div>
                            <div className='cursor-pointer hover:text-gray-300'>
                                <h1>About Us</h1>
                            </div>
                        </div>
                        <Button label='Contact Us' bgColor='bg-mainBg' border='border' cls='text-sm px-2 md:px-6 lg:px-6' />
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <img src={country} />
                            <img src={down} className='w-4 h-4' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
