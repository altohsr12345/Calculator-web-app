let a = "";
let b = "";
let oper = "";
let firstvar = true;



// updates display of the results screen
function updateDisplay() {
  if (firstvar) {
    document.querySelector("#ResultBox h1").textContent = a || "";
  } else {
    document.querySelector("#ResultBox h1").textContent = `${a} ${oper} ${b || ""}`;
  }
}

document.querySelectorAll(".digit").forEach(button => {
  button.addEventListener("click", function() {
    let digit = button.id;
    if (firstvar === true) {
        if (a.length < 4) {
            a = String(a) + digit;
            console.log(a);
        }
    } else {
        if (b.length < 4) {
            b = String(b) + digit;
            console.log(b);
        }
    }
    updateDisplay();
  });
});



document.querySelectorAll(".oper").forEach(button => {
  button.addEventListener("click", function() {
    oper = button.id;
    firstvar = false;   
    updateDisplay();
  });
});


document.querySelectorAll(".clear").forEach(button => {
  button.addEventListener("click", function() {
    a = "";
    b = "";
    firstvar = true; 
    oper = "";
    updateDisplay();
  });
});

document.querySelectorAll(".equal").forEach(button => {
  button.addEventListener("click", function() {
    if (oper === "+") {
        result = Number(a) + Number(b);
    }   else if (oper === "-") {
        result = Number(a) - Number(b);
    }   else if (oper === "x") {
        result = Number(a) * Number(b);
    }   else if (oper ==="/" && b === "0") {
        result = "Error";
    }   else if (oper === "/") {
        result = Number(a) / Number(b)
    }
    updateDisplay();
    
    document.querySelector("#ResultBox h1").textContent = String(result);

    a = String(result);
    b = "";
    oper = "";
    firstvar = true;
    })
});
