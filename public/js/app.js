class Account {
  constructor(fullname, email, age, password) {
    this.fullname = fullname;
    this.email = email;
    this.age = age;
    this.password = password;
  }
}

let accounts = [{ name: 'mehdi', userName: 'forkanimahdi', email: 'email@email.com', password: '123' }];

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
              const regex = /[^a-zA-Z\s]/g;
              if (fullname.length < 5) {
          alert("Please enter a full name with at least 5 characters.");
        } else if (regex.test(fullname)) {
          alert("Please enter a full name with only letters and spaces.");
        } else {
          
          break;
        }
  }
}
while (true) {
  email = prompt("Enter your full email:");
  if (email) {
    if (email.startsWith(' ') || email.endsWith(' ')) {
      alert('rah fih espace fl lawal ola lakhar');
      continue;
    } 
    if (email !== email.toLowerCase()) {
      alert('dekhal fih horof seghar');
      continue
    } 
    if (email.includes(' ')) {
      alert("rah eando espace waset")
      continue
    }
    if (email.length < 10) {
      alert('rah seghar mn 10')
      continue
    }
    if (!email.includes('@')) {
        alert('dir fih @')
        continue
    }
    if (accounts.some(account => account.email === email)) {
      alert('Email address already exists. Please try again.');
      continue;
    }
   
    break
  }
  
  
  
}
while (true) {
  age=prompt("enter age")
  if (age) {
      if (age.length<3) {
          alert("rah nadi")
        
      }
      if (age.includes(" ")) {
          alert("rah fih espace")
          continue
      }
      if (isNaN(age)) {
          alert("khashum ikuno ar9am")
          continue
      }
  }
  break
}
while (true) {
  let password=prompt("enter password ")
  if (password) {

          if (password.trim() !== password) {
              alert("Email should not have spaces at the beginning or end");
             continue
            }
          if (password.includes(" ")) {
              alert("rah fih espace waset");
              continue
          }
          if (!checksp(password)) {
              alert("ra khas ikun fih chi caracter mn hadu")
              continue
          }
          if (password.length<7) {
              alert("rah 9al mn 7")
              continue
          }
  }
  break
}


  
let account = new Account(fullname, email, age, password);
accounts.push(account);
console.log(accounts);

}
function checksp(password) {
  const charsp = ["@", "#", "-", "+", "*", "/"]
  include = false;
  charsp.forEach((ch) => {
      if (password.includes(ch)) {
          include = true;
      }
      })
      return include;
  }



//   if (password === confirmPassword && confirmPassword.length > 5) {
//     console.log("Account created successfully!");
//   } else {
//     console.log("Try again we accept at least 5 in password");
//     return
//   }

//   if (password.includes("@", "#", "-", "+", "*", "/")) {
//     console.log("password accepted");
//   } else {
//     console.log(
//       "must contain at least one special character from: @, #,-,+,*, / "
//     );
//   }
// }
// function signIn(email, password) {
//   const email1 = prompt("Enter you email ?");
//   const password1 = prompt("enter you password ?");
//   if (email1 === email) {
//     console.log("everything is right");
//   } else if (password === password1) {
//     console.log("password right");
//   } else {
//     console.log("rak ghlatti");
//   }
// }

// function changePassword(fullname) {
//   let fullname1 = prompt("Enter your full name:");
//   let oldPassword = prompt("Enter your old password:");
//   let newPassword = prompt("Enter your new password:");
//   let confirmPassword = prompt("Confirm your new password:");
//   if (fullname1==fullname) {
//     if (oldPassword==password) {
//       if (newPassword==confirmPassword) {
//       console.log("your password has been created succesfully");
//       }
//     }
//   } else{
//      console.log("your new full-name not match with your current full-name");
//   }
// }

function main() {
  let choice = prompt(
    "Choose between those: 1-Sign up, 2-Sign in, 3-Change Password?"
  );

  if (choice == "1") {
    signUp();
  } else if (choice == "2") {
    signIn();
  } else if (choice == "3") {
    changePassword();
  } else {
    console.log("Try again");
  }
}

main();
