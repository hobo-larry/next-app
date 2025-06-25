"use client"
import React from 'react'
import { CldUploadWidget,CldImage  } from 'next-cloudinary';
import { useState } from 'react';


interface cloudinaryResult {
  
  
  public_id: string;
  
}

const uploadFile = () => {
  const [publicId, setPublicID] =  useState("");
  return (
    <>
    {publicId && <CldImage
    width="260"
    height="100"
    src={publicId}
    sizes="100vw"
    alt="Description of my image"/>}
    <CldUploadWidget uploadPreset='testUploadPreset' onSuccess={(result, widget)=>{
      if(result.event !== "success") {
        return}
        else{ const info = result.info as cloudinaryResult;
      setPublicID(info.public_id);}
       
      console.log(result)}}>
        {({ open })=><button className='btn btn-primary' onClick={()=>open()}>Upload</button>}
    </CldUploadWidget>
    
   
    </>
  )
}

export default uploadFile