import React from 'react'

export const useLocalStorage = (state) => {
    let uniqueId = React.useId() + "localStorage:"
 
    const [newState, setNewState] = React.useState(
       localStorage.getItem(uniqueId) || state
    )
    
    return [newState, (val) => {
       setNewState(val)
       localStorage.setItem(uniqueId, val)
    }]
}

export const useCookies = (val) => {
    let uniqueId = React.useId() + "cookie:"
    
    const [newState, setNewState] = React.useState(
        (function() {
            let cookie = document.cookie
            let result = ''

            cookie.split('; ').forEach((item) => {
               let part = item.split('=')

                if(part[0] === uniqueId) {
                   result = part[1]
                }
           })

           if (result === '')
              return val
           else
              return result
        })()
    )

    return [newState, (val) => {
        setNewState(val)
        document.cookie = `${uniqueId}=${val};`
    }]
}

export const useSetCookie = (name, val) => {
    if(val === null || val === undefined) {
        document.cookie = `${name}=${val}; expires=Sun, 1 January 2010 12:00:00 UTC;`
        return "Deleted: Successfully deleted '" + name + "' from cookies!"
    }

    if(name.includes(';') || name.includes('=') ||
       val.includes(';') || val.includes('=')
    ) return "Error: Using ';' or '=' in cookies is deprecated"

    document.cookie = `${name}=${val};`
    return 'Success: Successfully changed ' + name + "'s value!"
}

export const useGetCookie = (name) => {
    let cookie = document.cookie
    let result = ''

    cookie.split('; ').forEach((item) => {
        let part = item.split('=')

        if(part[0] === name) {
            result = part[1]
        }
    })

    return result
}