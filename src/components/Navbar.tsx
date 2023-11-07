import logo from '../../public/images/logo.png'
import country from '../../public/images/country.png'
import { Button } from './Button'
export const Navbar = () => {
    const data = [
        {
            label: 'About Us'
        },
        {
            label: 'Product'
        },
        {
            label: 'Project'
        },
        {
            label: 'Career'
        },
    ]
    return (
        <div className='w-full bg-mainBg py-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center text-white'>
                    <img src={logo} />
                    <div className='flex items-center gap-5'>
                        <div className='hidden md:flex md:gap-5 lg:flex lg:gap-5'>
                            {
                                data.map((item, index) => (
                                    <div key={index} className='cursor-pointer hover:text-gray-300'>
                                        <h1>{item.label}</h1>
                                    </div>
                                ))
                            }
                        </div>
                        <Button label='Contact Us' bgColor='bg-mainBg' />
                        <img src={country} />
                    </div>
                </div>
            </div>
        </div>
    )
}
