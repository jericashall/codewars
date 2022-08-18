/*Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}*/


function declareWinner(fighter1, fighter2, firstAttackerName) {
    
      let secondAttacker, firstAttacker

      if(firstAttackerName === fighter1.name) {
    
        firstAttacker = fighter1
    
        secondAttacker = fighter2
    
      } else {
    
        firstAttacker = fighter2
    
        secondAttacker = fighter1
    
      }
    
      while(fighter1.health > 0 || fighter2.health > 0) {
    
        secondAttacker.health -= firstAttacker.damagePerAttack
    
        if(secondAttacker.health > 0) {
    
          console.log(`${firstAttacker.name} attacks ${secondAttacker.name}; ${secondAttacker.name} now has ${secondAttacker.health}.`)
    
        } else {
    
          console.log(`${firstAttacker.name} attacks ${secondAttacker.name}; ${secondAttacker.name} now has ${secondAttacker.health} and is dead. ${firstAttacker.name} wins.`)
    
          return firstAttacker.name
    
        }
    
        firstAttacker.health -= secondAttacker.damagePerAttack
    
        if(firstAttacker.health > 0) {
    
          console.log(`${secondAttacker.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health}.`)
    
        } else {
    
          console.log(`${secondAttacker.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} and is dead. ${secondAttacker.name} wins.`)
    
          return secondAttacker.name
    
        } 
    
      }
    
    }
