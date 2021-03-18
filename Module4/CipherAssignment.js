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
        
        if (newCharValue >= 65 && newCharValue <= 90){
          newChar = String.fromCharCode(newCharValue + 1);          
        }
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
    var NewJSONData = [];

    var newChar;
    var newCharValue;

    for (var para in jasonData){
      var NewStr = "";

      for (var Chara in jasonData[para]){
        newChar = jasonData[para][Chara];
        newCharValue = newChar.charCodeAt(0);
        
        if (newCharValue >= 65 && newCharValue <= 90){
          newChar = String.fromCharCode(newCharValue + 13 - 26);          
        }
        else if (newCharValue >= 97 && newCharValue <= 122){
          newChar = String.fromCharCode(newCharValue + 13 - 26);
        }

        NewStr += newChar;
      }  //End for Char
      NewJSONData.push (NewStr);
    } //End for Para
   
    for (var para in NewJSONData){
      document.getElementById("encrypted").innerHTML += "<p>" + NewJSONData[para] + "</p>";
    }
  }

  /* COULD NOT GET THIS TO WORK BUT KEEPING IT FOR REFERNCE
  else {
    var NewJSONData = [];
    
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