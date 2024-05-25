 import getdata from './fetchdata.js'

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((res)=>{
//  console.log((res));
//   res.forEach(user => {
//     // console.log(user)
//     document.getElementById("viewdata").innerHTML+=`
//         <tr>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//             <td>${user.company.name}</td>
//             <td>${user.phone}</td>
//             <td>${user.website}</td>
//         </tr>`
//     });
// })
// .catch((err)=>{
//     console.log(err);
// })

getdata()

