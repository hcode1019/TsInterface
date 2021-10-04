interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3 (person: Person3 ): void{
  console.log(`안녕! 내 이름은 ${person.name}이고 내 가족은 ${person.parant} 라고 해!`)
}

const p31: Person3 = {
  name: "Mark",
  age: 32,
  parant: "July"
}

const p32: Person3 = {
  name: "Suzan",
  age: 24,
  parant: p31.name
}                                           

hello3(p31);
hello3(p32);
