import { useMutation } from '@tanstack/react-query'
import { GraduationCap, Languages, MapPin, Share2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { getDoctorDetails } from '../../Homepage/Service'
import { useParams } from 'react-router-dom'
import Loader from '../../../Component/Loader/Loader'

const DoctorDetails = () => {
    // api call
    const { id } = useParams()
    const { mutateAsync, data, isPending } = useMutation({ mutationFn: getDoctorDetails })
    useEffect(() => {
        mutateAsync(id)
    }, [])

    if (isPending) return <Loader />;
    if (!data) return <>Doctors Details Not Found!</>;
    console.log(data)
    return (
        <section className='w-[75%] mx-auto'>
            <div className='w-full lg:w-[60%]'>
                <div className='bg-white p-5 border shadow my-2 flex gap-7 flex-wrap'>
                    <div className='w-[130px] h-[130px] rounded-full'>
                        <img className='object-cover object-top w-full h-full rounded-full' src={`http://localhost:1337${data?.avatar?.url}`} alt="" />
                    </div>
                    <div>
                        <h5 className='font-bold text-[30px] text-black'>{data?.name}</h5>
                        <h6 className='font-semibold text-[17px]'>Doctor</h6>
                        <p>{data?.experience}+ years of experience</p>
                        <table className='text-neutral-500 text-sm a_doctor_card mt-3'>
                            <tbody>
                                <tr>
                                    <td>   <GraduationCap size={20} /> </td>
                                    <td className='text-[15px]'><span>{data?.education}</span></td>
                                </tr>
                                <tr>
                                    <td className='pe-2'> <Languages size={20} />  </td>
                                    <td className='text-[15px]'><span>{data?.languages?.map((ele, index) => `${ele.name}${index >= 0 ? "," : ""}`)}</span></td>
                                </tr>
                                {data?.hospitals?.map(({id,name},index)=>{
                                    return <tr key={id}>
                                    <td>
                                        {index === 0 ? <MapPin size={16} /> : null}
                                    </td>
                                    <td>
                                        <h6 className="font-semibold text-black text-[14px]">
                                            {name}
                                        </h6>
                                    </td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Share2 />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorDetails