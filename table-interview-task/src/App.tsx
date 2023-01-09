import React, {useEffect, useState} from 'react';
import {getLocations} from "./utils/getLocations";
import './App.css'
// https://randomuser.me/api/?results=10

export type Location = any

enum SortingDirection {
    DESC = 'DESC',
    ASC = 'ASC',
    DEF = 'DEF'
}



const checkSortDirection = (sortDir: SortingDirection) => {
    if(sortDir === SortingDirection.ASC) {
        return SortingDirection.DESC
    } else if(sortDir === SortingDirection.DESC) {
        return SortingDirection.DEF
    } else {
        return SortingDirection.ASC
    }
}

function App() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(SortingDirection.DEF);
    const [defaultDir, setDefaultDir] = useState<Location[]>([])
    const [search, setSearch] = useState<string>('')
    const [searchedLocations, setSearchedLocations] = useState<Location[]>([])


    useEffect(() => {
        getLocations().then((data) => {
            setLocations(data);
            setDefaultDir(data)
        }).catch((error) => {
            console.error(error);
        })
    }, [])

    useEffect(() => {
        setSearchedLocations(locations)
        console.log(locations)
        if (locations.length > 0) {
            setHeaders(Object.keys(locations[0]))
        }
    }, [locations]);


    const sortLocations = (header: string) => {
        setSortingDirection(prev => checkSortDirection(prev))
        if(sortingDirection === SortingDirection.DEF) {
            setLocations(defaultDir)
            return
        }
        const sortedLocations: any[] = [...locations].sort((a: any, b: any) => {
            const aL = a[header]
            const bL = b[header]
            if (sortingDirection === SortingDirection.ASC) {
                if (aL < bL) return -1
                if (aL > bL) return 1
                return 0
            } else if (sortingDirection === SortingDirection.DESC) {
                if (aL > bL) return -1
                if (aL < bL) return 1
                return 0
            }
            return 0
        })
        setLocations(sortedLocations)
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setLocations(() => defaultDir.filter((location: any) => {
            return Object.values(location).some((value: any) => {
                return typeof value === 'string' ? value.toLowerCase().includes(e.target.value.toLowerCase()) : false
            })
        }))
    }

    return (
        <div className="App">
            <input type='text' value={search} className='input-field' onChange={onSearch} />
            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th style={{cursor: 'pointer'}} onClick={() => sortLocations(header)} key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {locations.map((location, index) => (
                    <tr key={index}>
                        {Object.keys(location).map((key, index) => (
                            <td key={index}>{location[key]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
