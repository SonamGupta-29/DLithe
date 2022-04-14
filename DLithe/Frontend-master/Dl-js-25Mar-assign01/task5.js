
      // task 3
      // Multiply the values by 2. Whether value is number.
      // If yes, then multiply by 2 if not keep it as is.
      // Hint: Check the type by typeof
      let pageInfo = {
        width: 500,
        height: 800,
        title: "My page",
      };

      for (let info in pageInfo) {
        //console.log(pageInfo[info]);
        if (typeof pageInfo[info] == "number") {
          // pageInfo[info]*=2;
          pageInfo[info] = pageInfo[info] * 2;
        }
      }
      console.log(pageInfo);
     
