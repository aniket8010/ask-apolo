import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { LocationsList } from './Service'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_LOCATION_DATA } from '../../Provider/Reducers/GlobalReducer/globalReducer'
import Locations from './Locations'
import { Link } from 'react-router-dom'
import ModalComponent from './ModalComponent'
import { LogOut } from 'lucide-react'
import { UPDATE_USER_DATA } from '../../Provider/Reducers/AuthReduce/authReducer'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  // redux 
  const dispatch = useDispatch()
  // using redux 
  const { activeLocation } = useSelector((state) => state?.globalReducer)
  const { user } = useSelector((state) => state?.authReducer)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const result = await LocationsList()
      dispatch({ type: UPDATE_LOCATION_DATA, payload: result || [] })
      // setData(result || [])
      setLoading(false)
    }
    getData()
  }, [dispatch])

  function logoutHandler() {
    dispatch({ type: UPDATE_USER_DATA, payload: null })
  }

  return (
    <header className='w-[80%] mx-auto py-2 '>
      <div className='flex justify-between items-center flex-wrap'>
        <div className="w-full  lg:w-[30%] flex justify-center">
          <div className='w-[120px]'>
            <Link to={"/"}> <img width={"100%"} src="https://www.askapollo.com/assets/images/askapollo-logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <nav>
            <ul className='flex justify-end items-center gap-2 flex-wrap text-[12px]'>
              <li><button onClick={() => setOpen(true)} className='border border-primary px-2 py-1 rounded-[3px] text-primary '>{loading ? "Loading..." : activeLocation}</button></li>
              <li className='cursor-pointer hover:text-orange-300'><span>Need Help</span></li>
              {!user && <li onClick={() => setShowModal(true)} className='cursor-pointer  hover:text-orange-300'><span>Login-SignUp</span></li>}
              {user && <li className='flex items-center gap-2'>{user?.username} <span onClick={logoutHandler} className='cursor-pointer'><LogOut size={15} /></span></li>}
            </ul>
          </nav>
        </div>
        {open && <Modal maskClosable={false} closeIcon={false} width={"50%"} title="Popular Cities" open={open} footer={false} onCancel={() => setOpen(false)}>
          <Locations onClick={setOpen} />
        </Modal>}
        {showModal && <ModalComponent onClose={() => setShowModal(false)} />}
      </div>
    </header >

  )
}

export default Header