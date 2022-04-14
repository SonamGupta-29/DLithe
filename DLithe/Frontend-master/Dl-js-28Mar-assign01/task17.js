
      //task 1 spread operator
      let showName = (fname, lname, ...arg) => {
        let a = fname + " " + lname + "";
        for (let title of arg) {
          a = a + " " + title + " ";
        }
        return a;
      };
      console.log(showName('sonam','Gupta','karera'))
    