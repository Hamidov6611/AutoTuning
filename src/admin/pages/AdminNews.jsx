import React from 'react'
import AdminLayout from '../components/layout/layout'
import { IconButton } from '@mui/material'
import { AddCircleOutlineIcon } from '@mui/icons-material'

const AdminNews = () => {
  return (
    <AdminLayout>
      <div className='min-h-[100vh] py-16 pl-[25px]'>
      <div className=" w-[90%] lg:w-[98%] mx-auto mb-12 ml-[6%] sm:ml-[1%] items-center mt-2 flex justify-between">
          <p className="text-white font-semibold text-[20px]">Продукт</p>
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{ cursor: "pointer" }}
          >
            <AddCircleOutlineIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminNews