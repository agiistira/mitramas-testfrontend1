import React from 'react'
import Archive from '../../Assets/Icon/Archive'
import Building from '../../Assets/Icon/Building'
import Check from '../../Assets/Icon/Check'
import Home from '../../Assets/Icon/Home'
import Search from '../../Assets/Icon/Search'
import Tickets from '../../Assets/Icon/Tickets'
import Users from '../../Assets/Icon/Users'
import Logo from "../../Assets/logo.png"




export default function Sidebar() {
  return (
    <div className={"px-1"}>
      <div className="pt-5">
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </div> 

      <div className="px-2 pt-10 cursor-pointer">
        <Home/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Tickets/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Check/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Archive/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Building/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Users/>
      </div>

      <div className="px-2 pt-10 cursor-pointer">
        <Search/>
      </div>
    </div>
  )
}

