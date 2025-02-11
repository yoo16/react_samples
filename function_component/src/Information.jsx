import React, { useState } from 'react'

function Information() {
    const [isShow, setIsShow] = useState(false);

    const showHandler = () => {
        setIsShow(!isShow);
    }

    return (
        <div>
            <button onClick={showHandler}>{isShow ? "Hide" : "Show"}</button>
            {isShow ?
                <div className="message">
                    <p>Hello!</p>
                </div>
                : ''
            }
        </div>
    )
}

export default Information