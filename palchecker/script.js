const checkBtn = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const resultContainer = document.getElementById("result")



function checkPal(input) {
  //check if there is input
  if (input === "") {
    alert("Please input a value")
    resultContainer.style.display = "none"
    return
  }
  
  //removes all non alphanumeric and reverses
  let cleanedText = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let reversedText = [...cleanedText].reverse().join("")
  
  //checks if input is palindrome
  let result = cleanedText === reversedText ? "is" : "is not"
  let resultMsg = `<p><strong>${input}</strong> ${result} a palindrome!</p>`
  
  //displays results
  resultContainer.innerHTML = resultMsg
  resultContainer.style.display = "block"
}


//gives functionality to check button
checkBtn.addEventListener("click", () => { 
  checkPal(textInput.value)
  textInput.value = ""
  })