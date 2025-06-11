import React from 'react'

interface Props{    
    params:{id:number; photoid:number}
}

const PhotoDetailPage =  ({ params:{id, photoid} }: Props) => {
  
  return (
    <div>PhotoDetailPage for User {id}, Photo {photoid}</div>
    

  );
};

export default PhotoDetailPage