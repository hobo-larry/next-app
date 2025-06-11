import React from 'react'

interface Props{    
    params:{id:number; photoid:number}
}

const PhotoDetailPage = async ({ params }: Props) => {
  const { id, photoid } = await params; // Await the params Promise and destructure
  console.log(photoid);
  return (
    <div>PhotoDetailPage for User {id}, Photo {photoid}</div>
    

  );
};

export default PhotoDetailPage