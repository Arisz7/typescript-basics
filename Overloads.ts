// Overloads are useful for documentation + type safely purpose
//@ts-ignore
function padding(all: number): number;
function padding(topAndBottom: number, leftAndRight: number): number;
function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
): number;

function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}
// Here the first three functions signatures are what available as valid calls to padding

// console.log(padding(1));
// console.log(padding(1, 1));
// console.log(padding(1, 1, 1, 1));

// Default value

function whatever(n: number, s: string = "hello") {
  // console.log(n, s);
}

// whatever(123);
// whatever(345, "world");

{/*================================================================================================= */}

//Callable function using interface
interface Overloaded {
  (str: string): string;
  (str?: number): number;
}
let overload: Overloaded = (str) => str?

// console.log(bar("hello"));


//Callable function using arrow syntax
//One way to sepcify callable syntax using arrow function


let  triggere: {
 (title: boolean): boolean
 (title: boolean):boolean
} = (title) => (title);


// A tuple interface of values
interface Complex {
  (letra: string, otro: boolean[], bar?: number): number;
}


//Newable  speacial way of invoking to call annotation types with the prefix of new

interface CallMeWithNewToGetTrigger {
  new():string
}


declare const Foo: CallMeWithNewToGetTrigger;

const bar2 = new Foo()

interface Assertion {
  chalala: string
  void: number
}


var fi = {} as Assertion

fi.chalala = "caca";
fi.void = 123

console.log(fi.chalala)



