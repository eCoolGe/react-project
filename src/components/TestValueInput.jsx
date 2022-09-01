import React, {useState} from 'react';

const TestValueInput = () => {
    const [value, setValue] = useState('TEXT')

    return (
        <div>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default TestValueInput;