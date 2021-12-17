import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <React.Fragment>
            <div className={style.hr}>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div >
                    DataPeace
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
