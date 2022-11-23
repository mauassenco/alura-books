import './Logo.css'
import logo from '../../images/logo.svg'

// function Logo() {
//     return (
//         <div className='logo'>
//             <img src={logo} alt="React Bookshelf logo" />
//             <p><strong>React</strong> Boookshelf</p>
//         </div>
//     )
// }

// export default Logo

// rafce

import React from 'react'

const Logo = () => {
    return (
        <div className='logo'>
            <img
                className='logo__img'
                src={logo}
                alt="React Bookshelf logo" />
            <p><strong>React</strong> Bookshelf</p>
        </div>
    )
}

export default Logo