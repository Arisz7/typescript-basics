//The contents of lib.d.ts are primarily a bunch of variables declarations window.document, math and a bunch of similar interfaces
{
  /*Modifying Native Types */
}

//Since an interface in typescript is open ended it means that you can stil add members in the lib.d.ts and Typescript will render those
//additions

interface Window {
  helloWorld(): void;
}

//This allows you to use it in a time safe manner

// window.helloWorld = () => console.log("Hello World");

// window.helloWorld();

// window.helloWorld = () => console.log("gracius"); // this ;3
// window.helloWorld("gracius"); not this

// Example Math

interface Math {
  e: string;
  ln10: number;
  //@ts-ignore
}

export {};

declare global {
  interface String {
    endsWith(suffix: string): boolean;
  }
}

String.prototype.endsWith = function (suffix: string): boolean {
  var str = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};

console.log("wenas wenas nochis".endsWith("wenas wenas nochis")); // true
console.log("mananar".endsWith("mananas")); // false
