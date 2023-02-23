import React, {useRef} from 'react';
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    return (
        <div ref={ref} style={{width: 300, height: 300, background: 'black'}}>
        </div>
    );
};

export default Hover;
