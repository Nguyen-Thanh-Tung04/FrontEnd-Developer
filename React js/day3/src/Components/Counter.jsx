import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>Counter</div>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button disabled={counter === 0}
                    onClick={() => setCounter(counter - 1)}
                >Decrement</button>
                <button disabled={counter === 0}
                    onClick={() => setCounter(0)}
                >Reset</button>
            </div>
        </>
    )
}

export default Counter