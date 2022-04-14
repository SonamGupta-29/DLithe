
      // task4

// Create calculator object.
// read()
// add()
// multiply()

let calculator={
    num1:0,
    num2:0,
    read:function(){
        this.num1=+(prompt("Enter first number"));
        this.num2=parseInt(prompt("Enter second number"));
        console.log(this.num1,this.num2);
    },
    add:function(){
        let addition=this.num1+this.num2;
        console.log("addition="+addition);
    },
    multiply:function(){
        let multiplication=this.num1*this.num2;
        console.log("Multiplication="+multiplication);
    }
}
calculator.read();
calculator.add();
  
