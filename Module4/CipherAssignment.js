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

  var jsonData = await response.json();

  //Raw text
  document.getElementById("raw").innerHTML = JSON.stringify(jsonData);

  //Formatting text
  for (var para in jsonData){
    document.getElementById("formatted").innerHTML += "<p>" + jsonData[para] + "</p>";
  }

 //Encrypting text
  if (getEncrypt==1){
    var NewJSONData = []; 

    var newChar;
    var newCharValue;

    for (var para in jsonData){
      var NewStr = "";

      for (var Chara in jsonData[para]){
        newChar = jsonData[para][Chara];
        newCharValue = newChar.charCodeAt(0);
        
        //looking for ASCII value of capitle
        if (newCharValue >= 65 && newCharValue <= 90){
          newChar = String.fromCharCode(newCharValue + 1);          
        }
        //looking for ASCII value of lowerc
        else if (newCharValue >= 97 && newCharValue <= 122){
          newChar = String.fromCharCode(newCharValue + 1);
        }
        NewStr += newChar;
      }  //End for Char
      NewJSONData.push (NewStr);
    } //End for Para
   
    for (var para in NewJSONData){
      document.getElementById("encrypted").innerHTML += "<p>" + NewJSONData[para] + "</p>";
    }
  }
 
  else { 
    //Dictionary 
    let decoded = {
      a: 'n', b: 'o', c: 'p',
      d: 'q', e: 'r', f: 's',
      g: 't', h: 'u', i: 'v',
      j: 'w', k: 'x', l: 'y',
      m: 'z', n: 'a', o: 'b',
      p: 'c', q: 'd', r: 'e',
      s: 'f', t: 'g', u: 'h',
      v: 'i', w: 'j', x: 'k',
      y: 'l', z: 'm',
      //caps
      A: 'N', B: 'O', C: 'P',
      D: 'Q', E: 'R', F: 'S',
      G: 'T', H: 'U', I: 'V',
      J: 'W', K: 'X', L: 'Y',
      M: 'Z', N: 'A', O: 'B',
      P: 'C', Q: 'D', R: 'E',
      S: 'F', T: 'G', U: 'H',
      V: 'I', W: 'J', X: 'K',
      Y: 'L', Z: 'M' 
    }
    var NewJSONData = []; 

    var newChar;
    var newCharValue;

    for (var para in jsonData){
      var NewStr = "";

      for (var Chara in jsonData[para]){
        newChar = jsonData[para][Chara];
        
        if (newChar.match(/[a-z]/i)){
          NewStr += decoded[newChar];
        }
        else {
          NewStr += newChar;
        }
      }  //End for Char
      NewJSONData.push (NewStr);
    } //End for Para
   
    for (var para in NewJSONData){
      document.getElementById("encrypted").innerHTML += "<p>" + NewJSONData[para] + "</p>";
    }
  }
  return true;
}