interface Person{
  name: string,
  age?: number
}
function hello(person: Person) : void{
  console.log(`안녕하세요 ${person.name} 입니다!`);
}

const p1: Person = {
  name: "Mark"
};

hello(p1);

function hello1 (person1:Person) : void{
  console.log(`안녕하세요 ${person1.name}입니다. 나이는 ${person1.age}입니다.
  무엇울 도와드릴까요?`)
};

const p2: Person = {
  name: "Hansol",
  age: 23
}

hello1(p2);

