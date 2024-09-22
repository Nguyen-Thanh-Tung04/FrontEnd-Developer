import React, { useState } from 'react';

    export const Tab = () => {
        const [tab, setTab] = useState(1)
        const handleTab = (number) => {
            console.log(number);
            setTab(number)
        }
        return (
            <div>
                <button onClick={() => handleTab(1)}>Tab1</button>
                <button onClick={() => handleTab(2)}>Tab2</button>
                {
                    tab === 1 ? <div>Nội dung tab1</div> : <div>Nội dung tab2</div>
                }

            </div>
        )
    }
