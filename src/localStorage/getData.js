
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

export function getCars () {
    let result = localStorage.getItem('cars');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getId () {
    let result = localStorage.getItem('id');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}
