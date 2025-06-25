"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';

const uploadFile = () => {
  return (
    <CldUploadWidget uploadPreset='testUploadPreset'>
        {({ open })=><button className='btn btn-primary' onClick={()=>open()}>Upload</button>}
    </CldUploadWidget>
  )
}

export default uploadFile