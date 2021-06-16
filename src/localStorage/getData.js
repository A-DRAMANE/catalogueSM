
export function getName () {
    let result = localStorage.getItem('name');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getSurname () {
    let result = localStorage.getItem('surname');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getFileUrll () {
    let result = localStorage.getItem('url');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

