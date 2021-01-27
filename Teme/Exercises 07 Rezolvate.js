//1. WAF WR 6 random numbers out of 49
// hint: create an array of objects {number: i, code: random string}. for random string use guid. (take a look over javascript guid function). sort the array by code and take first 6

function firstsix() {var result = []; 
    ALL();
    result.push(all.splice(0,6))
    return result;
  }

function ALL() { debugger; all =[];
    for(i=0;i<49;i++) {
        all.push(new RandomNum)
        }
return all;
}

function RandomNum() {
    RandomNum ={
    "number" : Randomise(),
    "code" : makeid()
    }
    return RandomNum;
}

function makeid() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < 4; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function Randomise() {
    result = []; 
    for(i=0; i<6;i++){ 
        result.push(
            Math.round(Math.random()*49)
        );
    }
    return result;
}

//2. simulate a 6/49 game. you have the winning 6 numbers and n tickets. return the tickets which has 1 winning number, 2 , .... 6
//hint: you can use :
//winningTickets = {};
//winningTickets[1] = []; ... winningTickets[6] = [];

function ticket() { 
    var tick = [];
      for(i=0;i<6;i++){
        tick.push(Math.round(Math.random()*49))
    }
    return tick;
}

function alltickets(n){
    all = []; 
    for(j=0;j<n;j++){
        all[j]=ticket()
    };
    return all;
}

function getCount (array) {
    winningtickets = [];
    var goodNumbers = [1,2,3,4,5,6]
   all.forEach( t => {

   })
}

function comparetickets(array) {
    winningtickets = [];
    var goodNumbers = [1,2,3,4,5,6]
   all.forEach( t => {

   })
}
