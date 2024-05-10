import React, { useEffect } from 'react'
import { SearchInputs } from '../../Component/Inputs/SearchInputs'
import { useMutation } from '@tanstack/react-query'
import { doctorsList } from './Service'
import { useDispatch } from 'react-redux'
import { UPDATE_DOCTORS_LIST } from '../../Provider/HomePage/HomePageReducers'

const Banner = () => {
    const dispatch = useDispatch()
    const { mutate } = useMutation({
        mutationFn: doctorsList, onSuccess(data) {
            //dispatch the doctors list
            dispatch({ type: UPDATE_DOCTORS_LIST, payload: data })
        }
    })

    useEffect(() => {
        mutate()
    }, [mutate])
    // console.log(mutate)
    return (
        <div className="bg-primary p-2">
            <div className='w-full lg:w-1/2'>
                <SearchInputs />
            </div>
        </div>)
}

export default Banner