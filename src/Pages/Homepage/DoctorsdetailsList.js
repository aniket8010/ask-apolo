import React, { useEffect, useMemo } from 'react'
import DoctorCard from './DoctorCard'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { doctorsDetailsServiceList } from './Service'
import Loader from '../../Component/Loader/Loader'
import DoctorsFilters from './DoctorsFilters'
import AppPagination from '../../Component/Pagination/AppPagination'
import { UPDATE_CURRENT_PAGE } from '../../Provider/HomePage/HomePageReducers'

const DoctorsdetailsList = () => {
    const { data, isPending, mutate } = useMutation({ mutationFn: doctorsDetailsServiceList })
    const { activeLocation } = useSelector(state => state?.globalReducer)

    const { doctorsFilter, currentPage } = useSelector(state => state?.HomePageReducer)
    //hooks
    const dispatch = useDispatch()
    useEffect(() => {
        if (!activeLocation) return
        let query = `&filters[hospitals][locations][name]=${activeLocation}&pagination[page]=${currentPage}&pagination[pageSize]=3`
        if (doctorsFilter?.category) {
            query += ` &filters[doctor_categories][id][$eq]=${doctorsFilter?.category}`
        }
        if (doctorsFilter?.gender) {
            query += ` &filters[Gender][$eq]=${doctorsFilter?.gender}`
        }
        if (doctorsFilter?.language) {
            query += ` &filters[languages][id][$eq]=${doctorsFilter?.language}`
        }
        mutate(query)
    }, [mutate, activeLocation, currentPage, doctorsFilter?.category, doctorsFilter?.gender, doctorsFilter?.language])

    const total = useMemo(() => data?.meta?.pagination?.total ?? 0, [data?.meta?.pagination?.total])

    if (isPending) return <Loader />

    return (
        <div>
            <DoctorsFilters />
            <h5>Search Result ({total})</h5>
            {data?.data?.map(({ id, ...rest }) => {
                return <DoctorCard {...rest} key={id} />
            })}
            <AppPagination currentPage={currentPage} total={total} onPageChnage={(page) => dispatch({ type: UPDATE_CURRENT_PAGE, payload: page })} />
        </div>
    )
}

export default DoctorsdetailsList