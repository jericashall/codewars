//March 29th - 8kyu
/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

function well(x){
    let goods = x.filter(test => test === 'good')
    return goods.length > 2 ? 'I smell a series!' : goods.length > 0 ? 'Publish!' : 'Fail!'
  }