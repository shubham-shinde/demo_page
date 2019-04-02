// const config = require('config');
// EosApi = require('eosjs-api') // Or 
// EosApi = require('./src')

// everything is optional
var url = window.location.href;
console.log(url);
  
  // eos = EosApi(options)
  
  // const util = require('util')
  
  // eos.getActions("user2account",-1,-5).then(result => console.dir(result,{depth:null})).then((data) => {
  //   console.log(data);
  // }).catch((err) => {
  //   console.log("err getAction", err);
  // })
  
  const userAction = async () => {
    const response = await fetch(url+'user');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson.rows);
    var cardsToShow = myJson.rows[0].ownedCards;
    var packsToShow = myJson.rows[0].ownedPacks;
    cardsToShow = cardsToShow.slice(cardsToShow.length-6, cardsToShow.length);
    packsToShow = packsToShow.slice(packsToShow.length-5, packsToShow.length);
    document.querySelector("#cards").innerHTML = '{' + cardsToShow.join(', ') + '}';
    document.querySelector("#packs").innerHTML = '{' + packsToShow.join(', ') + '}';
    // do something with myJson
  }

  function liString(action) {
      switch (action.name) {
          case "addcard": {
              var ss = `<li class=log-pass>
                <code symbol="✓">Creating new Card on blockchain and syncing with database. CardName : <strong>${action.data.cardName}</strong></code>
              </li>`
              return ss;
              break;
          }
          case "openpack": {
              var ss = `<li class=log-info>
                <code symbol="і">Opening pack on blockchain and syncing with database. PackId : <strong>${action.data.packId}</strong></code>
              </li>`
              return ss;
              break;
          }
          case "issuepack": {
              var ss = `<li class=log-info>
                <code symbol="і">Issuing new Pack on blockchain and syncing with database. Owner : <strong>${action.data.owner}</strong></code>
              </li>`
              return ss;
              break;
          }
          case "adduser": {
              var ss = `<li class=log-pass>
                <code symbol="✓">Adding new User on blockchain and syncing with database. Username : <strong>${action.data.userName}</strong></code>
              </li>`
              return ss;
              break;
          }
          case "rmsellord": {
              var ss = `<li class=log-pass>
                <code symbol="✓">Removed Card from Market on blockchain and syncing with database. CardName : <strong>${action.data.sellOrderId}</strong></code>
              </li>`
              return ss;
              break;
          }
          case "addsellord": {
              var ss = `<li class=log-pass>
                <code symbol="✓">Added Card to Market on blockchain and syncing with database. Price : <strong>${action.data.priceInDollars}</strong></code>
              </li>`
              return ss;
              break;
          }
      
          default:
              break;
      }
  }

  const actions = async () => {
    const response = await fetch(url+'actions');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson[0].action_trace.act);
    myJson.reverse();
    var toAdd = '';
    for(var i in myJson) {
        toAdd = toAdd + liString(myJson[i].action_trace.act);
    }
    document.querySelector("#logs").innerHTML = toAdd;

    // do something with myJson
  }
  userAction();
  
  setInterval(() => {
    userAction();
  }, 5000);

actions();

setInterval(() => {
    actions();
}, 5000);