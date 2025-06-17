import React from 'react'
import { Link } from 'react-router-dom'
// import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'
import '../styles/ui.css'

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='link'>Fast pizza co.</Link>
            {/* <SearchOrder /> */}
            <Username />
        </header>
    )
}

export default Header