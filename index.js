// Add your code here

// configurationObj = {
//     method: "POST",
//     header: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body : JSON.stringify({
//         "name": name,
//         "email": email
//     }),
    
// }


const Query = document.querySelector('form')
console.log(Query, "its working")

function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body : JSON.stringify({
            "name": name,
            "email": email
        }),
        
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => alert(`ERROR! ${err}`))
}

