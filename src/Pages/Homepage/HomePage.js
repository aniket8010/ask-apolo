import React from 'react'
import Banner from './Banner'
import "./HomePage.css"
import DoctorsdetailsList from './DoctorsdetailsList'

const Homepage = () => {
    return (
        <div className='w-full lg:w-[95%] mx-auto '>
            <Banner />
            <div className='w-[80%] mx-auto'>
                <h5>Search result (21)</h5>
                <div className='flex'>
                    <div className="w-full lg:w-[50%]">
                        <div>
                        <DoctorsdetailsList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage