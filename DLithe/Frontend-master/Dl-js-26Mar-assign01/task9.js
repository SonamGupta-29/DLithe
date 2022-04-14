
      function camelize(str) {
        let a = str.split("-");
        let Str1 = "";
        a.forEach((element, index) => {
          if (index != 0) {
            Str1 += element.charAt(0).toUpperCase() + element.slice(1);
          } else {
            Str1 += element;
          }
          // console.log(Str1)
        });
      }
      console.log(camelize("background-color"));
    