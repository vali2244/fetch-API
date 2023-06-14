const myfunction =async()=>{
    const response =await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const jasonData= await response .json();
    const myData = jasonData

    for(let i=0; i<myData.length;i++){
   const div=  document.getElementById(`n1`)
   const span= document.createElement(`span`)

   span.innerText=myData[i].title
   div.append(span)
 
    }
 }
 

 myfunction()