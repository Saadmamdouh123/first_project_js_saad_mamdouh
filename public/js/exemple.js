class Account {
    constructor(fullname, email, age, password) {
        this.fullname = fullname;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}

let accounts = [];

function signUp() {
    let fullname;
    let email;
    let age;
    let password;
    

    
    while (true) {
        fullname = prompt("Enter your full name:");
        if (fullname) {
            fullname = fullname.trim()
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        let regex = /[^A-Za-z0-9]/
        if (fullname.length < 5) {
            alert("Please enter a full name with at least 5 characters.");
          } else if (regex.test(fullname)) {
            alert("Please enter a full name with only letters and spaces.");
          } else {
            
            break;
          }
    }
}

let account = new Account(fullname, email, age, password);
accounts.push(account);
console.log(accounts);
}
// Call signUp to test
signUp()
