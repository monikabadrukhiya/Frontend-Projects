async function getdata()
{
    try{
    let data= await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())

        // console.log(data)
        data.map(user => {
            console.log("user",user)
         document.getElementById("viewdata").innerHTML+=`
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
        </tr>`
     });
    }
    catch(error)
    {
        console.log(error)
    }
}
export default getdata