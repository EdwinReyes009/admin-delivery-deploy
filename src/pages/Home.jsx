import Sidebar from '../components/Sidebar'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import MyProfile from '../components/MyProfile'
import Dishes from '../components/Dishes'
import { useEffect } from 'react'
import { expiredJWT, getJWT } from '../services/jwt'
import Loader from '../components/Loader'

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        if (expiredJWT() && getJWT() == '')
            navigate('/auth')
    }, [navigate])

    return (
        <>
            <div className='grid grid-cols-6 min-h-screen overflow-y-scroll bg-slate-50'>
                <Sidebar />
                <div className='mt-10 col-span-6 xl:col-span-5 xl:col-start-2 xl:mr-[2.5%]'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/home/dashboard' />} />
                        <Route path='/dishes' element={<Dishes />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/my_profile' element={<MyProfile />} />
                        <Route path='/*' element={<Navigate to='/not-found' />} />
                    </Routes>
                </div>
            </div>
        </>

    )
}

export default Home
