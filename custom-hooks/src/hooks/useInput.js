import React from 'react';

const useInput = (init) => {
    const [value, setValue] = React.useState(init);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
};

export default useInput;
