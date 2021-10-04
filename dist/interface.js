"use strict";
function hello(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694 " + person.name + " \uC785\uB2C8\uB2E4!");
}
var p1 = {
    name: "Mark"
};
hello(p1);
function hello1(person1) {
    console.log("\uC548\uB155\uD558\uC138\uC694 " + person1.name + "\uC785\uB2C8\uB2E4. \uB098\uC774\uB294 " + person1.age + "\uC785\uB2C8\uB2E4.\n  \uBB34\uC5C7\uC6B8 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?");
}
;
var p2 = {
    name: "Hansol",
    age: 23
};
hello1(p2);
