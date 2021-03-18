async function getInfo() {
  var apiText = "https://baconipsum.com/api/"

  var getMeat = document.getElementById("meat").value;
    var apiText = apiText + "?type=" + getMeat;
  
  var getPar = document.getElementById("par").value;
    var apiText = apiText + "&paras=" + getPar;

  var getEncrypt = document.getElementById("encrypt").value;
  alert(apiText);

  var response = await fetch (apiText);

  document.getElementById("raw").innerHTML = "";
  document.getElementById("formatted").innerHTML = "";
  document.getElementById("encrypted").innerHTML = "";

  var jasonData = await response.json();

  //Raw text
  document.getElementById("raw").innerHTML = JSON.stringify(jasonData);

  //Formatting text
  for (var para in jasonData){
    document.getElementById("formatted").innerHTML += "<p>" + jasonData[para] + "</p>";
  }

 //Encrypting text
  if (getEncrypt==1){
    var NewJSONData = [];

    var newChar;
    var newCharValue;

    for (var para in jasonData){
      var NewStr = "";

      for (var Chara in jasonData[para]){
        newChar = jasonData[para][Chara];
        newCharValue = newChar.charCodeAt(0);
        
        //newChar = String.fromCharCode(newCharValue + 1);

        if (newCharValue >= 65 && newCharValue <= 90){
          newChar = String.fromCharCode(newCharValue + 1);
          NewStr += newChar;
          NewJSONData.push (NewStr);
        }
        
      }  //End for Char
      
    } //End for Para
   

    for (var para in NewJSONData){
      document.getElementById("encrypted").innerHTML += "<p>" + NewJSONData[para] + "</p>";
    }
  }
    
    /*var jasonData = function (str, amount) {
      // Wrap the amount
      if (amount < 0) {
        return jasonData(str, amount + 26);
      }
    
      // Make an output variable
      var output = "";
    
      // Go through each character
      for (var i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        var c = str[i];
    
        // If it's a letter...
        if (c.match(/[a-z]/i)) {
          // Get its code
          var code = str.charCodeAt(i);
    
          // Uppercase letters
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
          }
    
          // Lowercase letters
          else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
          }
        }
    
        // Append
        output += c;
      }
    
      // All done!
      document.getElementById("encrypted").innerHTML += "<p>" + output + "</p>";
    };
  }

  else {
    var ceasarCipher = jasonData;
      let ceasarCipher = (str) => {
        let decoded = {
          a: 'n', b: 'o', c: 'p',
          d: 'q', e: 'r', f: 's',
          g: 't', h: 'u', i: 'v',
          j: 'w', k: 'x', l: 'y',
          m: 'z', n: 'a', o: 'b',
          p: 'c', q: 'd', r: 'e',
          s: 'f', t: 'g', u: 'h',
          v: 'i', w: 'j', x: 'k',
          y: 'l', z: 'm'
        }
        str = str.toLowerCase();

        var decipher = "";
        for(let i=0; i < str.length; i++){
          decipher += decoded[str[i]];
        }
      }
      document.getElementById("encrypted").innerHTML += "<p>" + decipher + "</p>";
  }*/

  return true;
}