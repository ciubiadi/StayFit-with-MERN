import React from 'react'
import './MainHeader.css'

const MainHeader = (props) => {
    return (
        <header className={props.className}>
            {props.children}
        </header>
    )
}

export default MainHeader