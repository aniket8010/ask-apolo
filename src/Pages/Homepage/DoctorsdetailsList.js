import React, { useEffect } from 'react'
import DoctorCard from './DoctorCard'
import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { doctorsDetailsServiceList } from './Service'

const DoctorsdetailsList = () => {
    const { data, isPending, mutate } = useMutation({ mutationFn: doctorsDetailsServiceList })
    const { activeLocation } = useSelector(state => state?.globalReducer)
    useEffect(() => {
        if (!activeLocation) return 
        let query = `&filters[hospitals][locations][name]=${activeLocation}`
        mutate(query)
    }, [mutate, activeLocation])
    if (isPending) return <>Loading...</>
    return (
        <div>
            {data?.map(({ id, ...rest }) => {
                return <DoctorCard {...rest} key={id} />
            })}
        </div>
    )
}

export default DoctorsdetailsList