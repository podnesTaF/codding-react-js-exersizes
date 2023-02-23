import {useEffect, useState} from "react";

export default function (request) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        request()
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, []);

    return [data, loading, error]
}