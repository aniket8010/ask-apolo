import { Modal } from 'antd'
import React, { useState } from 'react'
import Locations from './Locations'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='w-[80%] mx-auto py-2 '>
      <div className='flex justify-between items-center flex-wrap'>
        <div className="w-full  lg:w-[30%] flex justify-center">
          <div className='w-[120px]'>
            <img width={"100%"} src="https://www.askapollo.com/assets/images/askapollo-logo.png" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <nav>
            <ul className='flex justify-end items-center gap-2 flex-wrap text-[12px]'>
              <li><button onClick={() => setOpen(true)} className='border border-primary px-2 py-1 rounded-[3px] text-primary '>AHEMADABAD</button></li>
              <li className='cursor-pointer hover:text-orange-300'><span>Need Help</span></li>
              <li className='cursor-pointer  hover:text-orange-300'><span>Login-SignUp</span></li>
            </ul>
          </nav>
        </div>
        {open && <Modal maskClosable={false} closeIcon={false} width={"50%"} title="Popular Cities" open={open} footer={false} onCancel={() => setOpen(false)}>
          <Locations onClick={setOpen} />
        </Modal>}
      </div>
    </header>

  )
}

export default Header