const getData = async() =>{
const res = await fetch('featured.json');
const data = await res.json();
return data;
}


export {getData}