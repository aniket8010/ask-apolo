import React from 'react'
import { createSlots } from '../../../lib/Helper';
import Carousel from 'react-multi-carousel';

const BookSlots = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
    return (
        <div className='border p-4 rounded-md shadow-sm w-full'>
            <Carousel responsive={responsive}>
                {slotsData.map(({ day, date }) => {
                    return <button className='bg-neutral-200 mx-2 p-2 rounded-md text-sm flex justify-center items-center gap-2'><span>{day}</span><span>{date}</span></button>
                })}
            </Carousel>
        </div>
    )
}

export default BookSlots