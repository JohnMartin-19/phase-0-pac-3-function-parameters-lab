function introduction(name) {
    console.log(`Hello,${name}`);
  }
  introduction('john')

function intro(name, lang) {
    console.log(`Hi, my name is ${name} and I am learning ${lang}.`);
  }
  intro('john', 'js')

  function sayHelloTo(name,lang = "JS") {
    console.log(`Hello,${name}, I hope you like ${lang}!`);
  }
  sayHelloTo('john')