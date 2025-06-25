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
    <CldUploadWidget
    options={{
      multiple: true,
      maxFiles:5,
      sources: [
        "local",
        "url",
        "camera",
        "google_drive",
        "facebook",
        "dropbox",
        "instagram"
    ],
    styles: {
        palette: {
            window: "#000000",
            sourceBg: "#000000",
            windowBorder: "#8E9FBF",
            tabIcon: "#FFFFFF",
            inactiveTabIcon: "#8E9FBF",
            menuIcons: "#2AD9FF",
            link: "#08C0FF",
            action: "#336BFF",
            inProgress: "#00BFFF",
            complete: "#33ff00",
            error: "#EA2727",
            textDark: "#000000",
            textLight: "#FFFFFF"
        }
    }}}
    
     uploadPreset='testUploadPreset' onSuccess={(result, widget)=>{
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