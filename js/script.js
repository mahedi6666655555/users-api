console.log("all ok");


let loddatas=()=>{

    let url=`https://jsonplaceholder.typicode.com/comments`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>showdata(data))

    
}



let showdata=(phones)=>{

let get1=document.getElementById("mahedix")
     for(const mahedi of phones) {
         console.log(mahedi);
         let create=document.createElement("div")
         create.classList.add("div")
         create.innerHTML=`
  
         <table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th  class="w-50" scope="row">${mahedi.name}</th>
      <td colspan="2" class="table-active">${mahedi.id}</td>
      <td>${mahedi.name}</td>
    </tr>
  </tbody>
</table>


         `
        
        get1.appendChild(create)
    }



}


loddatas()