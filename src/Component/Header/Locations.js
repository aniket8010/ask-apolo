import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_ACTIVE_LOCATION } from '../../Provider/Reducers/GlobalReducer/globalReducer'

const Locations = ({ onClick }) => {
  // using redux 
  const { locations, activeLocation } = useSelector((state) => state?.globalReducer)

  const dispatch = useDispatch()
  if (!locations) return null
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {locations?.map(({ id, name, icon: { data: { attributes: { url } } } }) => {
        return <div onClick={() => {
          //update the location
          dispatch({ type: UPDATE_ACTIVE_LOCATION, payload: name })
          onClick && onClick(false)

        }} key={id} className=' text-center cursor-pointer'>
          <div className={`w-[80px] hover:border-primary border-2 hover:border-2 h-[80px] rounded-md ${activeLocation === name ? "bg-orange-300" : "bg-blue-50"} p-2 `}>
            <img src={`http://localhost:1337${url}`} alt="" />
          </div>
          <h6 className='text-xs font-mono mt-1'>{name}</h6>
        </div>
      })}
    </div>
  )
}


export default Locations