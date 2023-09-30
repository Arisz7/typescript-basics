//:void  Use :void to signify that a function does not have a return type
//Example
function log(message: void): void {
  console.log(message);
}

//Generics
function reverse<T>(items: T[]): T[] {
  var toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed);
