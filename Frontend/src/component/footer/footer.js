import React from 'react'
import style from './footer.module.css'

const footer = () => {
    return (
        <React.Fragment>
             <div className={style.ft}>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div >
                    Amar Chauhan
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default footer
