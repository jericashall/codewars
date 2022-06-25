/*Clients place orders to a stockbroker as strings. The order can be simple or multiple or empty.

Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

Example:
"GOOG 300 542.0 B"

A multiple order is the concatenation of simple orders with a comma between each.

Example:
"ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

or

"ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

To ease the stockbroker your task is to produce a string of type

"Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

Example:
"Buy: 294990 Sell: 0"

Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

"Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

Examples:
"Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

"Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

Notes:
If the order is empty, Buy is 0 and Sell is 0 hence the return is: "Buy: 0 Sell: 0".
Due to Codewars whitespace differences will not always show up in test results.
With Golang (and maybe others) you can use a format with "%.0f" for "Buy" and "Sell".*/

function balanceStatements(list){
    let nb = 0
    let buy = 0
    let sell = 0
    let deformed = []
    if(!list) return `Buy: 0 Sell: 0`
    let arr = list.split(',').forEach(x => {
      let entry = x.trim().split(' ')
       if(entry[2].includes('.') === false) {
        nb += 1
        deformed.push(`${entry.join(' ')} ;`)
      }else if(entry[3] === 'B') {
        buy += +entry[2] * entry[1]
      }else if(entry[3] === 'S') {
        sell += +entry[2] * entry[1]
      } else {
        nb += 1
        deformed.push(`${entry.join(' ')} ;`)
      }
    })
    let deformedStr = ''
    for(let i = 0; i < deformed.length; i++) {
      deformedStr += deformed[i]
    }
    
    return nb > 0 ? `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}; Badly formed ${nb}: ${deformedStr}` : `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}`
  }

/*tests*/

const assert = require('chai').assert

describe("Tests", function(){
  it("test", function(){
    [
      [ "GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S", "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;" ],
      [ "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B", "Buy: 29499 Sell: 0" ],
      [ "GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S", "Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;" ],
    ].forEach(function(tst){
      assert.strictEqual(balanceStatements(tst[0]),tst[1]);
    })
  });
});
