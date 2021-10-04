interface Person2 {
  name: string;
  age?: number;
}

function hello2(person :Person2): void{
  console.log(`안녕하세요 ${person.name} 입니다!`)
}

const p3: Person= {
  name : "July",
  age : 19
}

hello(p3);
hello({name: "Michel"});
console.log(123);