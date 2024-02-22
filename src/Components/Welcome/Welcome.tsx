import React from 'react'
import './Welcome.css'
import logo from '../../assets/logo.png'
import { useAuth0 } from '@auth0/auth0-react'
const Welcome = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className='h-dvh'>
            <div className='grid grid-row-2 lg:grid-cols-2 w-screen h-full'>
                {!isAuthenticated && (<>
                    <div className='showcase h-full bg-main-img bg-no-repeat bg-right bg-cover'>
                        <div className='flex flex-col items-center justify-end md:justify-center h-full'>
                            <h2 className='text-white font-serif text-3xl w-96 text-center md:pt-64'>HR Lync is your comprehensive HRMS</h2>
                            <p className='text-black font-serif w-80 text-center text-sm pt-3 pb-10 md:pb-0'>Manage Employee Porfiles, Leave Performance, payroll and Scheduling</p>
                        </div>
                    </div>
                    <div className='w-50 flex flex-col'>

                        <div className='flex justify-end absolute right-0 gap-2 pt-1'>
                            <img src={logo} alt="Logo" className='h-10 md:h-16' />
                            <h2 className='flex items-center pr-3 md:pr-5 md:text-2xl text-xl font-light'>HR Lync</h2>
                        </div>
                        <div className='grow flex flex-col justify-center items-center gap-1'>
                            <h1 className='text-3xl lg:text-4xl font-light'>Welcome to HRMS</h1>
                            <button className=' border-blue-600 bg-blue-600 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2 text-white hover:scale-105 duration-300' onClick={() => loginWithRedirect()}>Login</button>
                        </div>



                    </div>
                </>)}

            </div>
        </div>
    )
}

export default Welcome
