import React, { useEffect } from 'react'
import { SearchInputs } from '../../Component/Inputs/SearchInputs'
import { useMutation } from '@tanstack/react-query'
import { doctorsList, hospitalsList } from './Service'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_DOCTORS_LIST } from '../../Provider/HomePage/HomePageReducers'

const Banner = () => {
    const dispatch = useDispatch()
    const { activeLocation } = useSelector(state => state?.globalReducer)

    const { mutate } = useMutation({
        mutationFn: doctorsList, onSuccess(data) {
            //dispatch the doctors list
            dispatch({ type: UPDATE_DOCTORS_LIST, payload: data })
        }
    })

    const { mutate: mutateHospitalsList, data, isPending } = useMutation({
        mutationFn: hospitalsList
        
    })

    useEffect(() => {
        if (activeLocation) {
            let query = `&filters[locations][name][$contains]=${activeLocation}`
            mutateHospitalsList(query)
        }
    }, [mutateHospitalsList, activeLocation])
    return (
        <div className="bg-primary p-2 flex gap-2 items-center">
            <div className='w-full lg:w-1/2'>
                <SearchInputs searchApiCalls={mutate} />
            </div>
            <div className='w-full lg:w-1/2'>
                <select className='bg-white w-full outline-none text-sm rounded-md py-2 px-4'>
                    <option value="">{isPending ? "Loading..." : "Select Hospitals"}</option>
                    {data?.map(({ id, name })=>{
                        return <option key={id} value={id}>{name}</option>
                    })}
                </select>
            </div>
        </div>)
}

export default Banner