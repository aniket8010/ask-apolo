import React, { useEffect, useMemo, useState } from 'react'
import DoctorCard from './DoctorCard'
import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { doctorsDetailsServiceList } from './Service'
import Loader from '../../Component/Loader/Loader'
import DoctorsFilters from './DoctorsFilters'
import AppPagination from '../../Component/Pagination/AppPagination'

const DoctorsdetailsList = () => {
    const { data, isPending, mutate } = useMutation({ mutationFn: doctorsDetailsServiceList })
    const [currentPage, setCurrentPage] = useState(1)
    const { activeLocation } = useSelector(state => state?.globalReducer)

    useEffect(() => {
        if (!activeLocation) return
        let query = `&filters[hospitals][locations][name]=${activeLocation}&pagination[page]=${currentPage}&pagination[pageSize]=3`
        mutate(query)
    }, [mutate, activeLocation, currentPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [activeLocation])

    const total = useMemo(() => data?.meta?.pagination?.total ?? 0, [data?.meta?.pagination?.total])

    if (isPending) return <Loader />

    return (
        <div>
            <DoctorsFilters />
            <h5>Search Result ({total})</h5>
            {data?.data?.map(({ id, ...rest }) => {
                return <DoctorCard {...rest} key={id} />
            })}
            <AppPagination currentPage={currentPage} total={total} onPageChnage={(page) => setCurrentPage(page)} />
        </div>
    )
}

export default DoctorsdetailsList