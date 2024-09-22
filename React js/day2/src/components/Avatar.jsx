import React from 'react'

export const Avatar = (props) => {
  console.log(props)
  const { data: { img, title }, size, status } = props
  return (
    <div className='flex flex-col items-center gap-'>
      <img src={img} alt="" width={size} />
      <p>Name : {title}</p>
      <p>{status ? "lên lớp": "ở lại"}</p>
    </div>
  )
}
