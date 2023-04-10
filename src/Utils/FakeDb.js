


const addToDb = id =>{
    let shoppingCart ={}
    const storedCart = localStorage.getItem('jobsCart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('jobsCart', JSON.stringify(shoppingCart))
}

const getStoredData = () =>{
    let shoppingCart = {}

    const storedCart = localStorage.getItem('jobsCart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    } 
    return shoppingCart;   
}


export {addToDb, getStoredData}