export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const setUser = (data) => {
    console.log("setUser :: ", data)
    return {
        type: 'SET_USER',
        payload: data
    }
}