import './App.css'
import { Navbar } from './components/Navbar'
import model from '../public/images/landing.png'
import bg from '../public/images/bg.png'
import bg2 from '../public/images/bg2.png'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'
import { GetNews } from './shared/Fetch'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast/headless'
import { IData } from './interface/Data-Interface'
import { Spinner } from './components/Spinner'
import people from '../public/people.svg'
import task from '../public/task-square.svg'
import chat from '../public/message.svg'
import lady from '../public/images/lady.png'
import { Footer } from './components/Footer'
const App = () => {
  const [data, setData] = useState<IData[]>([])

  useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {
    try {
      const result = await GetNews();
      if (result.res?.data.status == 'ok') {
        setData(result.res.data.articles);
      } else {
        toast.error("Terjadi Kesalahan Saat Request Data")
      }
    } catch (error) {
      toast.error('Server Tidak Merespon')
    }
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false} />
      <Navbar />
      <img src={bg} className='absolute z-0 object-cover w-full h-full md:h-full lg:h-auto' />
      <section id='home' className='h-screen relative'>
        <div className='container mx-auto'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <div className='p-2 h-screen text-white flex justify-center items-center'>
                <div>
                  <h1 className={`py-3 font-bold text-4xl md:text-6xl lg:text-7xl text-center md:text-start lg:text-start`}>Generate <span className='text-orange-300'>
                    New
                  </span>
                  </h1>
                  <h1 className='py-3 font-bold text-4xl md:text-6xl lg:text-7xl text-center md:text-start lg:text-start'>
                    Digital Coperation
                  </h1>
                  <p className={`pt-5 text-center md:text-start lg:text-start text-[14px] font-normal`}>
                    We design and build solutions by connecting ideas and technologhy to solve problems and get new ideas to business lifecycle.
                  </p>
                  <div className='flex pt-5 justify-center md:justify-start lg:md:justify-start'>
                    <a>
                      <Button label='Get Started' bgColor='bg-bgBtn' border='border-none' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden p-2 md:block lg:block md:col-span-6 lg:col-span-6">
              <div className='flex justify-center items-center h-full w-full'>
                <img src={model} alt="model" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='latest' className='h-screen'>
        <div className='grid grid-cols-12 pt-40'>
          <div className='col-span-12 text-center'>
            <div className='flex flex-col items-center gap-5'>
              <h1 className='font-bold text-5xl tracking-wider'>
                Latest New
              </h1>
              <div className='bg-mainBg h-2 w-28 rounded-md'>
              </div>
              <div className='px-16'>
                <h1 className='text-textSecond'>
                  At elKopra we are committed to providing top-notcto cater to all your needs. Our team of dedicated professionals is passionate about delivering exceptional solutions that exceed expectations.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 py-2 overflow-x-auto z-20'>
          <div className="col-span-12 flex gap-4 md:gap-5 lg:gap-0 lg:flex-wrap justify-around">
            {data ? (
              data.length > 0 ? (
                data.slice(0, 5).map((item, index) => (
                  <div key={index}>
                    <Card title={item.title} author={item.author} description={item.description} urlToImage={item.urlToImage} />
                  </div>
                ))
              ) : (
                <Spinner />
              )
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>
      <img src={bg2} className='pointer-events-none absolute z-0 mt-40 md:mt-40 lg:mt-40 object-cover w-full h-full md:h-full lg:h-auto' />
      <section id='our' className='h-screen relative mt-24'>
        <div className='grid grid-cols-12 pt-40'>
          <div className='col-span-12 text-center'>
            <div className='flex flex-col items-center gap-5'>
              <h1 className='font-semibold text-sm text-white'>
                Lorem ipsum dolot amet lorem ipsum
              </h1>
              <h1 className='font-bold text-5xl tracking-wider text-white'>
                Our <span className='text-txtCol'>Passion</span>  What We Do.
              </h1>
              <div className='bg-txtCol h-2 w-28 rounded-md'>
              </div>

            </div>
          </div>
        </div>
        <div className='grid grid-rows-3 md:grid-cols-12 pt-10'>
          <div className="col-span-4 flex flex-wrap gap-10 justify-center order-1">
            <div className='h-40 md:h-60 lg:h-80 w-80'>
              <div className='flex gap-5 flex-col justify-center items-center h-full  text-white'>
                <img src={chat} className='w-10 md:w-16 lg:w-20' alt="" />
                <h1 className='text-lg md:text-2xl lg:text-8xl font-semibold'>98%</h1>
                <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Positive Feedback</h1>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-wrap gap-10 justify-center order-2">
            <div className='h-40 md:h-60 lg:h-80 w-80'>
              <div className='flex gap-5 flex-col justify-center items-center h-full text-white'>
                <img src={people} className='w-10 md:w-16 lg:w-20' alt="" />
                <h1 className='text-lg md:text-2xl lg:text-8xl font-semibold'>120</h1>
                <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Enthusiastic Fulltime Employee</h1>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-wrap gap-10 justify-center order-3">
            <div className='h-40 md:h-60 lg:h-80 w-80'>
              <div className='flex gap-5 flex-col justify-center items-center h-full text-white'>
                <img src={task} className='w-10 md:w-16 lg:w-20' alt="" />
                <h1 className='text-lg md:text-2xl lg:text-8xl font-semibold'>20</h1>
                <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Projects Completed</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='subscribe' className='min-h-[500px] bg-mainBg'>
        <div className='grid grid-cols-12 pt-40 pb-5'>
          <div className="col-start-2 text-white col-span-10 relative bg-secondBg h-96 rounded-xl p-10">
            <div className='flex justify-between items-center h-full'>
              <div className='text-center md:text-start lg:text-start'>
                <div>
                  <h1 className='font-bold text-3xl'>
                    Subscribe news letter
                  </h1>
                </div>
                <div className='py-2 font-light'>
                  <p>
                    Using a combination of technology, process and talents we focus on our users needs and
                  </p>
                  <p>
                    help to accelerate their business at any scale. We deliver consistent
                  </p>
                </div>
                <div className='relative w-full'>
                  <input type="text" placeholder='input email' className='w-full pl-5 h-10 rounded-full mb-2 md:mb-0 lg:mb-0 text-black' />
                  <Button label='Send Email' bgColor='bg-bgBtn' cls='w-auto md:absolute md:right-0 md:bottom-0 lg:absolute lg:right-0 lg:bottom-0' />
                </div>
              </div>
            </div>
            <div className='hidden lg:block overflow-visible absolute bottom-0 -right-20' >
              <img src={lady} />
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}

export default App
