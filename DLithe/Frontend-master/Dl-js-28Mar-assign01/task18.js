
      //task2 mergeArrays([1,2,3], [3,4,5]) => [1,2,3,4,5]
      
      let spreadOpe = () => {
        let arr1 = [1, 2, 3];
        let arr2 = [3, 4, 5];
        let b = arr1.pop();
        let arr3 = [...arr1, ...arr2];
        return arr3;
      };
      console.log(spreadOpe());
    