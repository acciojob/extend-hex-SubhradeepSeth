const extendHex = (shortHex) => {
  // write your code here
  let ans = "#";
  
  if(shortHex.charAt(0)==='#'){
    if (shortHex.charAt(1) >= "A" && shortHex.charAt(1) <= "Z") {
        shortHex = shortHex.toUpperCase();
      }
  }
  else{
    if (shortHex.charAt(0) >= "A" && shortHex.charAt(0) <= "Z") {
        shortHex = shortHex.toUpperCase();
      }
  }
  
  for (let i = 0; i < shortHex.length; i++) {
    if (shortHex.charAt(i) === "#") continue;
    ans = ans + shortHex.charAt(i) + shortHex.charAt(i);
  }
  return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
