
      let i = 0;
      setTimeout(() => alert(i), 1000); // ?100000000  999999999
      // assume that the time to execute this function is >100ms
      for (let j = 0; j < 100; j++) {
        i++;
      }
    
