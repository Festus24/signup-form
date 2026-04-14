// let allUsers;

// if(localStorage.users) {
//     let retrieved = JSON.parse(localStorage.getItem('users'))
//     allUsers = retrieved
// } else {
//     allUsers = []
// }

let allUsers = JSON.parse(localStorage.getItem('users')) || []

const submitDetails = () => {
    const firstNameValue = document.getElementById('firstName').value
    const lastNameValue = document.getElementById('lastName').value
    const emailValue = document.getElementById('email').value
    const passwordValue = document.getElementById('password').value

    // console.log(firstNameValue, lastNameValue, emailValue, passwordValue);
    if(firstNameValue.trim()==='' || lastNameValue.trim()==='' || emailValue.trim()==='' || passwordValue.trim()==='') {
        alert('fill in all values')
    } else {
        const userObj = {firstNameValue, lastNameValue, emailValue, passwordValue}
        // console.log(userObj);
        // let found = allUsers.find((user)=>{return user.emailValue === userObj.emailValue})
        let found = allUsers.find(users=>users.emailValue === userObj.emailValue)
        // console.log(found);
        if (found) {
            alert('user already exists')
        } else {
            allUsers.push(userObj)
            // console.log(allUsers);
            localStorage.setItem('users', JSON.stringify(allUsers))
            btnText.innerText = '...loading'
            
            setTimeout(()=>{
                window.location.href = 'signin.html'
            }, 1500)
    
            // document.getElementById('firstName').value = ''
            // document.getElementById('lastName').value = ''
            // document.getElementById('email').value = ''
            // document.getElementById('password').value = ''
        }
    }
    
}
