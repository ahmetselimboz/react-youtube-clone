import React, { useState } from 'react'
import icons from "../assets/icons"
import images from "../assets/images/images"
import { Link, redirect, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
    const navigate = useNavigate();

    const onKeyFunc = (e) => {

        if (e.key === "Enter") {
            searchFun()
        }
    }

    const searchFun = () => {
        if (searchKeyword.length > 0) {
            
            navigate(`/search/${searchKeyword}`)
            setSearchKeyword("")
        }
    }

    return (
        <div className='w-full flex items-center justify-between h-20 px-3'>
            <div className='w-3/12 flex items-center space-x-4'>
                <icons.menu className='icon-style'></icons.menu>
                <Link to="/">
                    <img className='w-32' src={images.youtubePng} alt="" />
                </Link>
            </div>
            <div className='w-6/12 flex items-center space-x-4'>
                <div className='w-3/4 flex items-center '>
                    <input onKeyDown={onKeyFunc} value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} className='outline-none border p-2 h-10 flex-1' type="text" placeholder='Ara' required />
                    <div onClick={searchFun} className='bg-gray-100 h-10 w-20 flex items-center justify-center border cursor-pointer'>
                        <icons.search className='icon-style'></icons.search>
                    </div>
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border'>
                    <icons.microphone className='icon-style' />
                </div>
            </div>
            <div className='w-3/12 flex items-center justify-end space-x-5'>
                <icons.video className='icon-style text-2xl' />
                <icons.notification className='icon-style text-2xl' />
                <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}

export default Navbar