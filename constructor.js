
function NewClass(a , b )
{

    this.abc = a
    this.def = b
    console.log(a)
    console.log(b)

    NewClass.func = function() {

            return a + b 

    }

}


let obj = new NewClass(5 , 6)

let addition = NewClass.func()

console.log(addition)