const simplifyPath = (path) => {
    const finalPath = []
    const pathArr = path.split('/').filter(p => p !== '')


    for(let i = 0; i < pathArr.length; i++) {
        if(pathArr[i] === '..') {
            finalPath.pop()
        } else if(pathArr[i] === '.') {
            continue
        } else {
            finalPath.push('/' + pathArr[i])
        }
    }

    if(!finalPath.length) {
        return '/'
    }

    return finalPath.join('')
}
