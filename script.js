// practice 1 => 


// let user = {
//     name : "john",
//     age : 30,
//     sayHello(){
//         return(`Hello ${this.name}`)
//     }
// };
// console.log(user.sayHello())
















// practice 2 =>


// let steps = 0;
// let obj = {
//     increase(){
//         steps++;
//     },
//     decrease(){
//         steps--;
//     },
//     reset(){
//         steps = 0;
//     },
//     read(){
//         console.log(steps);
//     }
// }
// obj.increase(),obj.increase(),obj.decrease(),obj.read()























// practice 3 =>


// let array = [];
// let entering = () =>{
//     let enter = prompt("Enter your name and age:");
//     if(enter != ""){
//         let splited = enter.split(',');
//         let object = {
//             Name : splited[0],
//             Age : splited[1]
//         };
//         array.push(object);
//         entering();
//     }
// }
// let sorting = () =>{
//     array.sort((a, b) =>{
//         return a.Age - b.Age
//     });
//     console.log(array);
// }
// entering();
// sorting();












// practice 4 =>


// let a = prompt('Type your text');
let text = document.getElementsByClassName("text");







// practice 5 =>


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
// )

