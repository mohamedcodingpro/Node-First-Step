// function greet(name){
//     return("Hello, " + name + "!");
   
// }


// function Yo(name){
//     return "Yo, " + name + "!";

// }
// function ta(name){
//     return "8ta, " + name + "!";
// }
// import { greet } from './greet.js';

//  console.log(greet('Mohamed'));
// console.log(Yo('Ali'));
// console.log(ta('Abdi'));

// import {greet} from './greet.js'

import greet from './greet.js'
import yo from './greet.js'
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

figlet('Hello, Mohamed', function(err, data) {
    if (err) {
        console.log('Something went wrong');
        console.dir(err);
        return;
    }
    console.log(data);
});
const cowMessage = cowsay.say({
    text: greet('Mohamed')
})
console.log(cowMessage)

console.log(chalk.bgBlue.white(cowsay.say({
    text: "Hello, World!"
})));

const styledMessage = chalk.bgRed.whiteBright(greet('Mohamed'));
console.log(styledMessage)



// call the function & print the result on the screen
console.log(greet('Mohamed'));
console.log(yo('Ali'));