
// mykey 0b868f6c6b8449f1bba61600231406
// api http://api.weatherapi.com/v1/current.json?key



const Fatchweather =async()=>{
   
  const myInput= document.getElementById(`myinput`).value
const API= `http://api.weatherapi.com/v1/current.json?key=0b868f6c6b8449f1bba61600231406&q=${myInput}`
const response=await fetch(API)
const jasonData=await response.json();
const myData=jasonData
console.log(myData)
let myStringData = ` cloud is: ${myData.current.cloud} location is:${myData.location.country}`
 
    document.getElementById('temp').innerHTML=myStringData




}

