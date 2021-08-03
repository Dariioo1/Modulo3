// let fs = require('fs')

// let personas=
// {
//     "name":"Lucas",
//     "surname":"Paucar",
//     "age":19
// }


// fs.writeFile('miArchivo.json' , JSON.stringify(personas), ()=> {

// fs. readFile('miArchivo.json' , (err, data)=> {
//     let leer =JSON.parse(data);
//     console.log(leer);
// })
// })

let fs = require('fs')
let readline = require('readline');

let rl = readline.createInterface({input: process.stdin , 
    output: process.stdout});

function readLineDatos(persona){
           persona= {
                name:"",
                surname:"",
                age:0,
            }

rl.question("Name: " , (name) =>{
    name = name;
    rl.question("Surname: " , (surname) =>{
        surname=surname
        rl.question("Age: " , (age) => {
            age=age
            persona={"name":name, "surname":surname, "age":age}
            rl.close();
            let Json= JSON.stringify(persona);
            fs.writeFile('miArchivo.json' , JSON.stringify(Json), ()=> {
            fs.readFile('miArchivo.json' , (err, data)=> {
            let leer =JSON.parse(data);
            console.log(leer);
        })
  })

        })
    })
})

}
readLineDatos()