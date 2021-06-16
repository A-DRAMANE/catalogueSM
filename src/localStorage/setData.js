
export function setUseName(data) {
    localStorage.setItem('name', JSON.stringify(data))
}

export function setUserSurname(data) {
    localStorage.setItem('surname', JSON.stringify(data))
}

export function setFileUrll(data) {
    localStorage.setItem('url', JSON.stringify(data))
}