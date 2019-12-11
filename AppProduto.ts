import { Produto } from "./Produto";

let p1 = new Produto(1,"Maça","Grande",1.00,2,"URL");
let p2 = new Produto(2,"Pera","Grande",3.00,5,"URL");

console.log(p1.getInfo());
console.log("-----------------");
console.log(p2.getInfo());
console.log("-----------------");
console.log(p1);
