import React from 'react'
import { Avatar } from './Avatar'
import avatar from "../assets/4.webp"

export const Profile = () => {
  return (
    <div>
         <h1 className='mb-5' >Name:Nguyễn Thanh Tùng</h1>
         <Avatar status= {true} data={{title:"Tung", img: avatar}} size = "100"/>
         <Avatar status= {false} data={{title:"Tun", img: avatar}} size = "200"/>
    </div>
  )
}
