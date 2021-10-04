"use strict";
function hello3(person) {
    console.log("\uC548\uB155! \uB0B4 \uC774\uB984\uC740 " + person.name + "\uC774\uACE0 \uB0B4 \uAC00\uC871\uC740 " + person.parant + " \uB77C\uACE0 \uD574!");
}
var p31 = {
    name: "Mark",
    age: 32,
    parant: "July"
};
var p32 = {
    name: "Suzan",
    age: 24,
    parant: p31.name
};
hello3(p31);
hello3(p32);
