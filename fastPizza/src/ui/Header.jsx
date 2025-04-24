import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
    return (
        <header className='bg-yellow-500 px-4 py-3 uppercase border-b border-stone-500 sm:px-6 flex items-center justify-between'>
            <Link to='/' className='tracking-widest'>Fast React pizza co.</Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header