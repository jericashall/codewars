//May 13th - 7 kyu
/*Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"*/

function sevenAte9(str){
    let removedNines = ''
    for(let i = 0; i < str.length; i++) {
      if((str[i] === '9') && (str[i-1] === '7') && (str[i+1] === '7')) {
        continue
      }
      removedNines += str[i]
    }
    return removedNines
  }

/* test */
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(sevenAte9('165561786121789797'),'16556178612178977');
  Test.assertEquals(sevenAte9('797'),'77');
  Test.assertEquals(sevenAte9('7979797'),'7777');
    });
  });
  