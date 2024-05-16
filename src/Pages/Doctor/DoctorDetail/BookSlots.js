import React from 'react'
import { createSlots, findTimeSlots } from '../../../lib/Helper';
import Carousel from 'react-multi-carousel';
import { Sun } from 'lucide-react';
import { Button } from 'antd';

const BookSlots = ({ start, end }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    const slotsData = createSlots()
    const timeSlots = findTimeSlots(start, end)
    console.log(timeSlots)

    return (
        <div className='border p-4 rounded-md shadow-sm w-full'>
            <h6 className='font-bold text-xl p-3'>Book Digital Consult</h6>
            <Carousel responsive={responsive}>
                {slotsData.map(({ day, date }) => {
                    return <button key={date} className='border mx-2 px-3 py-1 rounded-md text-sm flex justify-center items-center flex-wrap'><span className='font-semibold'>{day}</span><span className='font-semibold text-xl'>{date}</span></button>
                })}
            </Carousel >
            <div className='flex flex-wrap gap-2 border p-2 rounded-md mt-4 '>
                <div className='font-semibold py-2 px-2 flex gap-2'>
                    <Sun />
                    <h6>Afternoon Slots</h6>
                </div>
                <div className='flex flex-wrap gap-4 justify-start px-4 items-center mb-2'>
                    {timeSlots.map((ele) => {
                        return <button key={ele} className='border py-3 px-2 rounded-md text-[14px] flex font-semibold'><span>{ele.toLocaleUpperCase()}</span></button>
                    })}
                </div>
                <Button className='bg-[#106C89] font-semibold mx-5' type="primary" block>
                    Continue Booking
                </Button>
            </div>
        </div>
    )
}

export default BookSlots