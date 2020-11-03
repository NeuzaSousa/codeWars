function updateInventory(curStock, newStock) {
    let inventories = [...curStock, ...newStock];
    let merged = {};
    for (let i = 0; i < inventories.length; i++) {
      let [count, brand] = inventories[i];
       // if brand exists in merged add count to existing count else set count to count 
      if(brand in merged) {
        merged[brand] += count;
      } else {
        merged[brand] = count;
      }
    }
    // put inventory in alphabetical order and return updated curStock
    let sortedbrands = Object.keys(merged).sort();
      let final = sortedbrands.map((b) => [merged[b], b]);
      return final;
}