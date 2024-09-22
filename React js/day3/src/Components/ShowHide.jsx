import React, { useState } from 'react';

export const ShowHide = () => {
    const [isShow, setIsShow] = useState(false);

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    return (
        <div>
            <button
                style={{
                    fontSize: "40px"
                }}
                onClick={toggleShow}
            >
                {isShow ? 'hide' : 'show'}
            </button>

            {isShow && (
                <p style={{
                    fontSize: "40px"
                }}>
                    Content
                </p>
            )}
        </div>
    );
};