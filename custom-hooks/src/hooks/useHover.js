import {useEffect, useState} from "react";

export default function useHover(ref) {
    const [isHovered, setIsHovered] = useState(false);

    const on = () => setIsHovered(true)
    const off = () => setIsHovered(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        const node = ref.current
        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)

        return () => {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        }
    }, []);


    return isHovered
}