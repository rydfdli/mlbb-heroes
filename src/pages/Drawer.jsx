import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/logo.svg'
import { GiCrossedSwords, GiSharpShuriken, GiAlienFire, GiSlashedShield, GiBowArrow, GiAngelOutfit, GiGamepadCross } from "react-icons/gi";
import { Outlet, Link } from 'react-router-dom'

export default function Drawer() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <img src={Logo} alt="logo" className='h-[100px]' />
                    <div className="divider"></div>
                    <li>
                        <Link to="/" className='normal-case text-lg'>
                            <GiGamepadCross />All
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/fighter" className='normal-case text-lg'>
                            <GiCrossedSwords />
                            Fighter
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/assassin" className='normal-case text-lg'>
                            <GiSharpShuriken /> 
                            Assasins
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/marksman" className='normal-case text-lg'>
                            <GiBowArrow /> 
                            Marksman
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/mage" className='normal-case text-lg'>
                            <GiAlienFire /> 
                            Mage
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/tank" className='normal-case text-lg'>
                            <GiSlashedShield /> 
                            Tank
                        </Link>
                    </li>
                    <li>
                        <Link to="roles/support" className='normal-case text-lg'>
                            <GiAngelOutfit /> 
                            Support
                        </Link>
                    </li>
                </ul>

            </div >
        </div >
    )
}
