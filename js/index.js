console.log("I'm ready!");


// Iteration 1: Names and Input
let hacker1 = "Paco";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "David";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if(hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//EJERCICIO 3.1
let newName = "";

for (let i = 0; i < hacker1.length; i++) {

    newName += hacker1[i].toUpperCase() + " ";
}

//EJERCICIO 3.2
console.log(newName);

let newName2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
    newName2 += hacker2[i];
}

console.log(newName2);


//EJERCICIO 3.3
if (hacker1[0] > hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker2[0] > hacker1[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] = hacker2[0]) {
    console.log("What?! You both have the same name?");
}






//BONUS 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem sed massa mattis semper. Donec vestibulum augue eget nisl porttitor tempor. In hac habitasse platea dictumst. Nam massa diam, sollicitudin a suscipit sed, vestibulum sit amet lorem. Nullam hendrerit elit eu suscipit finibus. Integer eget diam et enim ullamcorper gravida non at lorem. Mauris in placerat ligula. Proin vulputate mattis magna, in tincidunt ipsum. Morbi arcu nisl, blandit nec magna non, suscipit blandit dolor. Maecenas varius quam at nunc congue, sed dignissim lacus mollis. Ut eget fringilla est. Aliquam congue massa turpis, sit amet maximus ligula pharetra vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Mauris tempus, lacus sit amet condimentum posuere, arcu leo elementum ligula, eu ultrices odio velit eget nibh. Cras efficitur sagittis risus, non varius orci vulputate eget. Nullam diam arcu, mattis elementum ante non, mattis vulputate erat. In vel dictum eros. Integer vitae venenatis sem. Fusce sagittis pharetra sodales. Ut ac sagittis augue. Proin consectetur hendrerit metus, vitae vulputate nibh fermentum sit amet. Nunc vehicula, felis et dignissim dapibus, sapien quam mattis mauris, et fringilla dui turpis sit amet arcu.Donec finibus, nulla et rhoncus venenatis, mauris enim ultricies sem, a sollicitudin lorem elit a libero. Etiam justo lacus, tristique in diam quis, aliquet sodales leo. Cras eget luctus est, in ultricies nunc. Nam imperdiet enim metus, sit amet viverra mauris eleifend vel. Nulla in orci ex. Duis vel nibh massa. Mauris malesuada massa quam, eu malesuada sem tincidunt nec. Morbi tincidunt turpis vel nisi ultricies, id scelerisque purus placerat. Vestibulum hendrerit posuere metus vel fringilla. Aliquam venenatis, mi dictum dapibus venenatis, erat magna feugiat sapien, ac hendrerit magna leo vitae turpis. Vivamus dapibus magna nec est semper, sodales tincidunt odio accumsan. Ut eu ipsum fermentum, faucibus justo vitae, consectetur erat. Curabitur eget varius dui, in efficitur quam. Praesent sit amet mauris auctor, feugiat ante vel, mattis augue. Cras lobortis ultricies auctor."


let counter = 0;



for(let i= 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " ") {
        continue;
    }
    else if (loremIpsum[i]){ 

        counter += +1;
    }
}

let counterEt = 0;

for(let i= 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === "e" + "t"){ // No sabría como sacarlo de momento, supongo que tengo que concatenar la letra "e" y "t" ya que las revisa por separado el loop pero me siga dando valor 0
        counterEt += +1;
    }
}

console.log(counter);
console.log(counterEt);