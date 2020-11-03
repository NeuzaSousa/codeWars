function looseChange(cents){
    let result = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
    
    let coins = Math.floor(cents)
    
    if(coins < 0) {
      return result;
    }
    result['Quarters'] = Math.floor(coins / 25);
    coins = coins - (result['Quarters']*25);
    result['Dimes'] = Math.floor(coins / 10);
    coins = coins - (result['Dimes']*10);
    result['Nickels'] = Math.floor(coins / 5);
    coins = coins - (result['Nickels']*5);
    result['Pennies'] = coins;
    
    return result;
  }