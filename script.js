function checkPalindrome() {
    let str = document.getElementById("inputText").value;
    let cleaned = "";
  
    // Keep only alphanumeric characters and convert to lowercase
    for (let char of str) {
      if (/[a-z0-9]/i.test(char)) {
        cleaned += char.toLowerCase();
      }
    }
  
    let reversed = "";
    for (let char of cleaned) {
      reversed = char + reversed;
    }
  
    let result = document.getElementById("result");
    if (cleaned === reversed) {
      result.textContent = `"${str}" is a palindrome ✅`;
      result.style.color = "green";
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      result.textContent = `"${str}" is not a palindrome ❌`;
      result.style.color = "red";
    }
  }
  