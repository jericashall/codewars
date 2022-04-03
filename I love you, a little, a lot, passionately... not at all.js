//April 2nd - 8 kyu
/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/


function howMuchILoveYou(nbPetals) {

      while (nbPetals > 6) {

        nbPetals -= 6

      }

      console.log(nbPetals)

      let phrase = ''

      switch (nbPetals) {

          case 1:

            phrase = 'I love you'
    
            break
    
          case 2:
    
            phrase = 'a little'
    
            break
    
          case 3:
    
            phrase = 'a lot'
    
            break
    
          case 4:
    
            phrase = 'passionately'
    
            break
    
          case 5:
    
            phrase = 'madly'
    
            break
    
          case 6:
    
            phrase = 'not at all'
    
            break
    
      }

      return phrase

    }
