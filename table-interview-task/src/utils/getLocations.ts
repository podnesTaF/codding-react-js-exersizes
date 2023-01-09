import axios from 'axios';
import {Location} from '../App'

export const getFullLocation = (location: Location): any => {
    let fullLocation: any = {}
    for (let keys in location) {
        if (typeof location[keys] === 'object') {
            fullLocation = {...fullLocation, ...getFullLocation(location[keys])}
        } else {
            fullLocation[keys] = location[keys]
        }
    }
    return fullLocation
}

export const getLocations = async () => {
    const {data} = await axios.get('https://randomuser.me/api/?results=10')
    const locations = data.results.map((result: any) => result.location)
    return locations.map((location: Location) => getFullLocation(location))
}
