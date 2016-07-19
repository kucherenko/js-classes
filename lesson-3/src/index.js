import "babel-polyfill";

function* gen() {
  for (let z of [1,2,3]) {
    yield z;
  }
  return "ZZZ";
}

let g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
