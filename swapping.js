function numberSwapping() {
    let number = (document.getElementById("number").value);
    let newNumber;

    if (number.length< 3){
        
        number.innerHTML=(prompt("Enter a number of at least 3 digits"));
    }
    

    else {
        // Convert the string to an array
        let array = number.split('');
        secondDigit = array.at(1);
        lastDidit = array.at(-1);
        array[1]=lastDidit;
        array[array.length-1]=secondDigit;
        newNumber = array.join(''); // Join the array back into a string
    
    }

    displayResult1("Old Number: " + number); // Call the displayResult1 function
    displayResult2("New Number: " + newNumber) // Call the displayResult2 function
}

function displayResult1(result1) {
    document.getElementById('result').textContent = result1; // Display the result1 on the HTML page
}
function displayResult2(result2) {
    document.getElementById('result').textContent = result2; // Display the result2 on the HTML page
}



