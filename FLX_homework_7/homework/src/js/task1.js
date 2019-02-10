let login = prompt("Enter your login:");
if(login === '' || login === null){
  alert("Cancelled");
} else if (login.length < 4){
  alert("I don't know any users having name length less than 4 symbols");
} else if ((login !== "User") && (login !== "Admin")) {
  alert( "I don't know you.");
} else {
  let password = prompt("Enter your password:");
  if (password === '' || login === null){
    alert("Cancelled");
  } else if ((login === "User" && password !== "UserPass") || (login === "Admin" && password !== "RootPass")){
    alert("Wrong password");
  } else {
    let time = new Date().getHours();
    if(time >= 20){
      if(login === "User"){
        alert("Good evening, dear User!");
      } else {
        alert("Good evening, dear Admin!");
      }
    } else {
        if(login === "User"){
          alert("Good day, dear User!");
        } else {
          alert("Good day, dear Admin!");
        }
      }
    }
  }
