import React from 'react'
import handleAlert from '~/Alert'
const Button = () => {
    return (
        <div>
            <button onClick={handleAlert}> Click me!</button>
        </div>
    )
}

export default Button
