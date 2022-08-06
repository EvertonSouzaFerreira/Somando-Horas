import React, {useState} from "react";
import Form from "./components/Form";

function App() {
  const [hora01, setHora01] = useState('')
  const [hora02, setHora02] = useState('')
  const [hora03, setHora03] = useState('')
  const [hora04, setHora04] = useState('')
  const [hora05, setHora05] = useState('')
  const [hora06, setHora06] = useState('')
  const [mainHora, setMainHora] = useState('')



  var principalHora = mainHora.split(':')

  if(hora01 && mainHora){
    // var primeiraHora = hora01.split(':')

    // var primeiraHoraNumber = []

    // var length= primeiraHora.length

    // for (var i = 0; i < length; i++) {
    //   primeiraHoraNumber.push(parseInt(primeiraHora[i]))
    // }
    // console.log(primeiraHoraNumber)
    
    var hora =+principalHora[0]
    var min = +hora01 + +principalHora[1]
    var sec = +principalHora[2]

    // if (sec > 59) {
    //   sec = sec - 60;
    //   min = min +1
    // }
    if(min > 59) {
      min = min -60
      hora = hora +1
    }
    if(hora > 23) {
      var sobra = hora - 23
      hora = sobra-1
    }
    
  }
  var soma01 = hora + ':' + min + ':' + sec

  if (hora02 && mainHora) {
    // var segundaHora = hora02.split(':')

    var horaa02 = +principalHora[0]
    var min02 = +hora02 + +principalHora[1]
    var sec02 =  +principalHora[2]

    // if (sec02 > 59) {
    //   sec02 = sec02 - 60;
    //   min02 = min02 +1
    // }
    if(min02 > 59) {
      min02 = min02 -60
      horaa02 = horaa02 +1
    }
    if(horaa02 > 23) {
      var sobra02 = horaa02 - 24
      horaa02 = sobra02
    }
  }
  var soma02 = horaa02 + ':' + min02 + ':' + sec02

  if (hora03 && mainHora){
    // var terceiraHora = hora03.split(':')

    var horaa03 = +principalHora[0]
    var min03 = +hora03 + +principalHora[1]
    var sec03 = +principalHora[2]

    // if (sec03 > 59) {
    //   sec03 = sec03 - 60;
    //   min03 = min03 +1
    // }
    if(min03 > 59) {
      min03 = min03 -60
      hora = hora03 +1
    }
    if(horaa03 > 23) {
      var sobra03 = horaa03 - 24
      horaa03 = sobra03
    }
  }
  var soma03 = horaa03 + ':' + min03 + ':' + sec03

if (hora04 && mainHora) {
  //  var quartaHora = hora04.split(':')

   var horaa04 = +principalHora[0]
   var min04 = +hora04 + +principalHora[1]
   var sec04 = +principalHora[2]

  //  if (sec04 > 59) {
  //    sec04 = sec04 - 60;
  //    min04 = min04 +1
  //  }
   if(min04 > 59) {
     min04 = min04 -60
     horaa04 = horaa04 +1
   }
   if(horaa04 > 23) {
     var sobra04 = horaa04 - 24
     horaa04 = sobra04
   }
}
var soma04 = horaa04 + ':' + min04 + ':' + sec04

if(mainHora) {
  
  var horaa05 = +principalHora[0]
  var min05 = +principalHora[1] + 20
  var sec05 = + principalHora[2]

  if (sec05 > 59) {
    sec05 = sec05 - 60;
    min05 = min05 +1
  }
  if(min05 > 59) {
    min05 = min05 -60
    horaa05 = horaa05 +1
  }
  if(horaa05 > 23) {
    var sobra05 = horaa05 - 24
    horaa05 = sobra05
  }
}
var soma05 = horaa05 + ':' + min05 + ':' + sec05

if(mainHora) {
  
  var horaa06 = +principalHora[0]
  var min06 = +principalHora[1] + 20
  var sec06 = + principalHora[2]

  if (sec06 > 59) {
    sec06 = sec06 - 60;
    min06 = min06 +1
  }
  if(min06 > 59) {
    min06 = min06 -60
    horaa06 = horaa06 +1
  }
  if(horaa06 > 23) {
    var sobra06 = horaa06 - 24
    horaa06 = sobra06
  }
}
var soma06 = horaa06 + ':' + min06 + ':' + sec06

  return (
    
    <>
     <Form 
     hora01={hora01} setHora01={setHora01}  
    
     soma01={soma01}
     soma02={soma02} 
     soma03={soma03}
     soma04={soma04}
     soma05={soma05}
     soma06={soma06}
     mainHora={mainHora} setMainHora={setMainHora}
     hora02={hora02} setHora02={setHora02}
     hora03={hora03} setHora03={setHora03}
     hora04={hora04} setHora04={setHora04}
     hora05={hora05} setHora05={setHora05}
     hora06={hora06} setHora06={setHora06}
     />
    </>
  );
}

export default App;
