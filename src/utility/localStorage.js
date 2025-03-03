export const getDataFromLs = () => {
    const data = localStorage.getItem('listed-books');
    if(data) {
        return JSON.parse(data);
    }

    return [];
}

export const setDataToLs = (id) => {

    const data = getDataFromLs();
    
    if(data.includes(id)) {
        return console.log("product id already exsist")
    }

    data.push(id);
    localStorage.setItem('listed-books', JSON.stringify(data));
}


export default {
    getDataFromLs,
    setDataToLs
}