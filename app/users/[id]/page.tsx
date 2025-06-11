import React from 'react'

interface Props{    
    params:{id:number}
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params; // Await the params Promise to access id
  return (
    <div>UserDetailPage {id}</div>
  );
};

export default UserDetailPage