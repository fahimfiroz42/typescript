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