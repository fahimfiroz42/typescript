let greeting:string="hello"

greeting=greeting.toLocaleUpperCase()

let age:number=20

let isOnline:boolean=true

// age='dfd'
// isOnline=20
// greeting=true
// it is wrong type but my application is not crush becausd of type checking

// union type
let tax:number | string=20
tax='20'
tax=20


// this is the example of union type
let biddingStatus:'open' | 'close'='open'
biddingStatus='close'




let notSure:any=20
notSure='20'
notSure=true
notSure=20
// type any we can use any type of value

let bike1={brand:"honda",color:"black"}
let bike2={brand:"yamaha",color:"red"}
let bike3={brand:"suzuki"}

let items:{brand:string,color?:string}[]=[bike1,bike2,bike3]


let names:string[]=["abul","babul","kabul"]

function processInput(input:string|number):string|number{
   if(typeof input === 'string'){
    return input.toLocaleUpperCase()
   }
   else{
    return input*2
   }
} 

console.log(processInput("abul"));
console.log(processInput(20));


function processData(input:string|number,config:{reverse:boolean}){
 if(typeof input === 'string'){
  return input.toLocaleUpperCase()
 }
 else if(typeof input === 'number'){
  return input*2
 }
 else if(config.reverse && typeof input === 'string'){

    return input
}

}


console.log(processData("abul",{reverse:true}));


