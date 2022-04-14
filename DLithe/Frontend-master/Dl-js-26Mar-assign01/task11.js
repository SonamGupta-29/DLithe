
      function Calculator() {
        num1 = 0;
        num2 = 0;
        this.read = function () {
          this.addMethod("+", (a, b) => a + b);
        };
        this.sum = function () {
          let addition = this.num1 + this.num2;
          console.log("addition=" + addition);
        };
        this.mul = function () {
          let multiply = this.num1 * this.num2;
          console.log("multiplication=" + multiply);
        };
      }
      let calculator1 = new Calculator();
      calculator1.read();
      calculator1.addMethod();
      calculator1.sum();
      calculator1.mul();
    
