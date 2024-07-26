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
  let fullname = prompt("Enter your full name:");
  let email = prompt("Enter your email:");
  let age = prompt("Enter your age:");
  let password = prompt("Enter your password:");
  let confirmPassword = prompt("Confirm your password:");

  let account = new Account(fullname, email, age, password);
  accounts.push(account);
  console.log(accounts);
  if (password === confirmPassword && confirmPassword.length > 5) {
    console.log("Account created successfully!");
  } else {
    console.log("Try again we accept at least 5 in password");
    return
  }

  if (password.includes("@", "#", "-", "+", "*", "/")) {
    console.log("password accepted");
  } else {
    console.log(
      "must contain at least one special character from: @, #,-,+,*, / "
    );
  }
}

function signIn(email, password) {
  const email1 = prompt("Enter you email ?");
  const password1 = prompt("enter you password ?");
  if (email1 === email) {
    console.log("everything is right");
  } else if (password === password1) {
    console.log("password right");
  } else {
    console.log("rak ghlatti");
  }
}

// function changePassword(newpass, newpass1, newpass2) {
//     const newpass = prompt("Enter your last password")
//     const newpass1 = prompt("Enter new password")
//     const newpass2 = prompt("confirm your password")
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
