import React , {useState} from 'react'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Categories</h1>
      <div className='menuList'>{MenuList.map((menuItem,key) =>{
        return <MenuItem 
        key = {menuItem.key}
        image = {menuItem.image}
        name = {menuItem.name}/>
      })}</div>
    </div>
  )
}

export default Menu