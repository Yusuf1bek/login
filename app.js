const form = document.querySelector(".form")
const inpUsername = document.querySelector(".form input[type=text]")
const inpUserpassword = document.querySelector(".form input[type=password]")

const BASE_URL = "https://dummyjson.com"

form.addEventListener("submit", e => {
    e.preventDefault()
    let user = {
        username: inpUsername.value,
        password: inpUserpassword.value
    }

    fetch(`${BASE_URL}/auth/login`, {
        method:"POST",  
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }
        throw Error("username or password in corect")
    })
    .then(res => {
        console.log({res})
        open("/pages/dashboard.html", "_self")
    })
    .catch(err => {
        console.log({err})
        alert(err.message)
    })
    .finally(() => console.log("tugadi"))
})

