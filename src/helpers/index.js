export const saveStorage = (key, payload)=>{
    localStorage.setItem(key, JSON.stringify(payload))
}

export const getStorage = (key)=>{
    return JSON.parse(localStorage.getItem(key))
}