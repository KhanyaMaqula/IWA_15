const data = {
    lists: [
      ["first", [15, 11, 13, 7, 5]],
      ["second", [2, 6, 8, 4, 14, 12, 10]],
      ["third", [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const { lists } = data;
  
  const result = [];
  
  const extractBiggest = () => {
    let max = -Infinity;
    let maxIndex = -1;
    
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i][1];
      const lastItem = list[list.length - 1];
      
      if (lastItem >max) {
        max = lastItem;
        maxIndex = i;
      }
    }
  
    const [_, list] = lists[maxIndex];
    list.pop();
    result.push(max);
    
    return max;
  };
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);
  