var person = {

name : "piyush",
age : 18,
work : "Dev"

}

console.log(person.name)
console.log(person.age)
console.log(typeof(person)) 
person[0] = "vyankatesh"    
console.log(person[0])
console.log(person[1])
console.log(person[2])

delete person.name
person.name = null
console.log(person.name)

person.name = "piyush"

console.log(person)




console.log("traverse through object : ")

for (let i in person)
{
    console.log(person[i]   )
}