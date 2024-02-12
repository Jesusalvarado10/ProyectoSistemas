const matriz= document.getElementById("table");
const numberSet= document.getElementById("Numbers");
const score= document.getElementById("Puntuacion")
const buttonRestart= document.getElementById("restart")
const buttonStart= document.getElementById("start")
const inputs=document.querySelectorAll("input")
const divView=document.getElementById("ViewUsers")
const buttonPass= document.getElementById("passball")
const miDiv = document.getElementById("ViewUsers");
const botones = miDiv.getElementsByTagName("button");
let result= []
const divResult= document.getElementById("resultados")
const divInputs= document.getElementById("divinputs")
const divBotones= document.getElementById("Matrizn")
const botonesMatriz = divBotones.getElementsByTagName("button");
let nMatriz=0;
const turnoSet= document.getElementById("Turno");
const buttonInicio= document.getElementById("Inicio")
const cardPuntuacion = document.getElementById("cards")
let datos= []
let array
let users=[]
let numbers= []
function ComponentCapsula(number, x, y) {
    this.number = number;
    this.x = x;
    this.y = y;
    this.validete=false;
    this.validateNumber = function(numberselect) {
     
        if (numberselect==number) {
            this.validate=true
            let component= document.getElementById(number)
            component.style.backgroundColor="red"
}

    }}
const ArrayNumbers=(n)=>{
    matriz.innerHTML = '';
    let number= 0;
    for(let i = 0; i< array.length; i++){
        for(let j = 0; j< array[i].length; j++){
            let td = document.create;
             let newnumber= new ComponentCapsula(RadonmNumber(),i,j);
            array[i][j]=newnumber
            crearComponente(newnumber)
        }
    }
    users[n].matriz=array
    numbers=[]
    array=  Array.from({ length: nMatriz }, () => Array(nMatriz).fill(0));
}

const changeNumber=()=>{
    number=RadonmNumber()
    checkArray(number)
    numberSet.innerText=`${number}`  
    turnoSet.innerText=`${numbers.length}`

}
const checkArray=(number)=>{
    for(let i = 0; i< array.length; i++){
        for(let j = 0; j< array[i].length; j++){
      
            array[i][j].validateNumber(number)
}}}

function RadonmNumber() {
    let number=  Math.floor(Math.random() * (50 - 0) + 0);
    while (numbers.includes(number)){
        number=  Math.floor(Math.random() * (50 - 0) + 0);
    }
    numbers.push(number)   
    return number;
}
function crearComponente(fila) {
    const componente = document.createElement('spam');
    componente.className = 'componente';
    componente.id=fila.number
    componente.textContent = `${fila.number}`;
    matriz.appendChild(componente);
}
buttonInicio.addEventListener("click", function() {
    cardPuntuacion.style.visibility="visible"
    matriz.style.visibility="hidden"
    numberSet.innerText=`Nothing`  
    turnoSet.innerText=`Nothing`
    buttonRestart.style.visibility="hidden";
    buttonPass.style.visibility="hidden";
    miDiv.style.visibility="hidden";
    divView.style.visibility="hidden";
    divResult.style.visibility="visible"
    buttonStart.style.visibility="visible"
    divResult.style.visibility="visible"

    divInputs.style.visibility="visible"
    miDiv.style.visibility="hidden";
    users=[]
    matriz.innerHTML = "";
    score.innerHTML="";
    divView.innerHTML = "";
    buttonInicio.style.visibility="hidden"
    matriz.style.visibility="hidden"
    showAllresutl()

})

const Game=()=>{ 
    matriz.style.visibility="visible"
    buttonRestart.style.visibility="visible";
    buttonPass.style.visibility="visible";
    divBotones.style.visibility="hidden"
    miDiv.style.visibility="visible";
    divView.style.visibility="visible";
    buttonInicio.style.visibility="visible";

    array=  Array.from({ length: nMatriz }, () => Array(nMatriz).fill(0));
    for(let i= 0; i<users.length;i++){
    ArrayNumbers(i)
}
array=users[0].matriz
interatorMatriz(array)

EventosBotones()


//     //  beackintervalo = setInterval(breackIntervalo, 200, intervalo,beackintervalo);

// }
}

const EventosBotonesMatriz=()=>{
    for (let i = 0; i < botonesMatriz.length; i++) {
        botonesMatriz[i].addEventListener("click", function() {
            let id = this.id;
            if(id=="3"){
                nMatriz=3
                console.log(nMatriz)
                matriz.style.width = "20rem"
                matriz.style.height="18rem"
                Game()
            }
            else if (id=="4"){
                nMatriz=4
                console.log(nMatriz)
                matriz.style.width = "25rem"
                matriz.style.height="22rem"
   
                Game()
            }
            else{
                nMatriz=5
                matriz.style.width = "30rem"
                matriz.style.height="29rem"
             
                console.log(nMatriz)
                Game()
            }
          
           
        });
    }
    }
    EventosBotonesMatriz()
    const bootonesMatriz=()=>{
        for (let i = 0; i < botonesMatriz.length; i++) {
            botonesMatriz[i].style.backgroundColor = 'white';
            }

    }
buttonStart.addEventListener("click", function() {
    
    bootonesMatriz()
    if(checkInputs()){
        if(users.length==0){    
            createUsers()}
    cardPuntuacion.style.visibility="hidden"
    divResult.style.visibility="hidden"
    buttonStart.style.visibility="hidden"
    divInputs.style.visibility="hidden"
    divBotones.style.visibility="visible"
    miDiv.style.visibility="hidden";
    divView.style.visibility="hidden";

   
    }
    
   
    })
buttonRestart.addEventListener("click", function() {
    numberSet.innerText=`Nothing`  
    turnoSet.innerText=`Nothing`
    matriz.innerHTML = "";
    score.innerHTML="";
    bootonesMatriz()
    divResult.style.visibility="visible"
    buttonStart.style.visibility="visible";
    buttonRestart.style.visibility="hidden";
    buttonPass.style.visibility="hidden";
    miDiv.style.visibility="hidden";
    divView.style.visibility="hidden";

    numbers=[]
})

buttonPass.addEventListener("click", function() {
  
    for(let i= 0 ; i<users.length;i++){
    if ( checkTableAll(users[i].matriz)|| numbers.length==25) {
        for(let i= 0 ; i<users.length;i++){
            array=users[i].matriz
            interatorMatriz(users[i].matriz)
            let score_u=checkScore()
            users[i].score=score_u
        }
    showScore()        
      return;
    }
    }
    changeNumber()
})
    matriz.innerHTML = '';
const checkTableAll=(arrayaux)=>{
    for(let i = 0; i< arrayaux.length; i++){
        for(let j = 0; j< arrayaux[i].length; j++){
            if(!arrayaux[i][j].validate){
                

                return false;
                
            }
        }
    }

    return true;

}

const checkInputs=()=>{
    for(let i= 0; i< inputs.length;i++){
        if(inputs[i].value==""){
            return false
        }

    }
    return true;

}


const checkScore= ()=>{
   
    let goal=0;
    for (let i = 0; i < array.length; i++) {
     
        const fila = array[i];
        if (fila.every((val, index) => val.validate == fila[0].validate)) {
 
                goal += 1; 
            }
        }
    for (let i = 0; i < array.length; i++) {
            const columna = array.map(row => row[i]);
            if (columna.every((val, index) => val.validate === columna[0].validate)) {
                goal += 1; 
            }
    
        }
    const diagonalPrincipal = [];
    const diagonalSecundaria = [];
    
    for (let i = 0; i < array.length; i++) {
        diagonalPrincipal.push(array[i][i]);
        diagonalSecundaria.push(array[i][array.length - 1 - i]);
    }
    if (diagonalPrincipal.every((val, index) => val.validate === diagonalPrincipal[0].validate) )  {
        goal += 3; 
    }
    if(diagonalSecundaria.every((val, index) => val.validate === diagonalSecundaria[0].validate)){
        goal += 3; 
    }
    if(checkTableAll(array)){
        goal+=5
    }
        return goal;

   
}
function User(name) {
    this.name = name;
    this.matriz = null;
    this.score=null;
    this.div=null;
    this.wins=0;
    

    }
const createUsers=()=>{
    for(let i= 0; i< inputs.length;i++){
       let user= new User(inputs[i].value)
       users.push(user)
    }
    createViewsUser()
}
const createViewsUser=()=>{
    for(let i= 0; i< users.length ;i++){
        users[i]
        const button = document.createElement('button');
        button.setAttribute("id", `${i}`);
        button.classList.add('buttonDefault')
      
        button.textContent = `${users[i].name}`;
        divView.appendChild(button);

     }

}
const EventosBotones=()=>{
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        let id = this.id;
        array=users[id].matriz
        interatorMatriz(users[id].matriz)
       
    });
}
}
const interatorMatriz=(arrayaxu)=>{
    matriz.innerHTML = '';
    for(let i = 0; i< arrayaxu.length; i++){
        for(let j = 0; j< arrayaxu[i].length; j++){
            crearComponente(arrayaxu[i][j])
            }
        }

    for(let j= 0; j< numbers.length;j++){
        checkArray(numbers[j])
    }

}

const showScore=()=>{
    let result_total=[]
    score.innerHTML=""
    for(let i= 0 ; i<users.length;i++){
        result_part= users[i]
        result_total.push(result_part)
        let p = document.createElement("p");
        p.textContent = users[i].name + ": " + users[i].score + " pts";
        score.appendChild(p);
    }
    winer()
    result.push(result_total)
    // showPastresult()
}

const showPastresult=()=>{
divResult.innerHTML = '';
    for(let i= 0 ; i<result.length;i++){
        for(let j= 0 ; j<result[i].length;j++){
         
            let p = document.createElement("p");
            p.textContent = result[i][j].name + ": " + result[i][j].score + " pts";
            divResult.appendChild(p);
        }
    
}}
const winer=()=>{
    let mayores = [users[0]]; 


    for (let i = 1; i < users.length; i++) {
        if (users[i].score > mayores[0].score) {
            mayores = [users[i]]; 
        } else if (users[i].score === mayores[0].score) {
            mayores.push(users[i]);
        }
    }
    if (mayores.length==1){
        mayores[0].wins+=1
        mandardatos(mayores[0])
  

    }
}
const validarDatosantiguos=(x)=>{
    for(let i = 0; i < datos.length; i++) {
        if(datos[i][0]==x.name){
            console.log("entra")
            x.wins=datos[i][1]
        }



    }


} 
const returnWins=(u)=>{

    for(let i = 0; i < datos.length; i++) {
        if(datos[i][0]==u.name){            
            u.wins=datos[i][1]
            return u
        }
    }

return true; 

}
const validarTrue=(u)=>{

    for(let i = 0; i < datos.length; i++) {
        if(datos[i][0]==u.name){            
            return false
        }
    }

return true; 

}
const mandardatos=()=>{
  
    for (let i = 0; i < users.length; i++) {
        let x= []
            x.push(users[i].name)
            x.push(users[i].wins)
            datos.push(x)
        
    }
   datos= agruparPorNombre(datos)
    localStorage.setItem('partida', JSON.stringify(datos));

}
const leerdatos=()=>{try{
    let arrayRecuperado = JSON.parse(localStorage.getItem('partida'));
    for (let i = 0; i < arrayRecuperado.length; i++) {
        let x= []
        x.push(arrayRecuperado[i][0])
        x.push(arrayRecuperado[i][1])
        datos.push(x)
        }
    console.log(datos)}
    catch   (error) {
        if (error instanceof TypeError) {

            console.error('Se produjo un error TypeError:', error.message);
        } else {

            console.error('Se produjo un error:', error.message);
        }
    }

}
leerdatos()
function agruparPorNombre(array) {
    console.log(array)
    let resultado = {};
    array.forEach(function(elemento) {
        let nombre = elemento[0];
        let valor = elemento[1];
    
        if (resultado[nombre]) {

            resultado[nombre] += valor;
        } else {
            resultado[nombre] = valor;
        }
    });
  
    let resultadoArray = [];
    for (let clave in resultado) {
        resultadoArray.push([clave, resultado[clave]]);
    }
    
    return resultadoArray;
}

const showAllresutl=()=>{
    try{
    for (let i = 0; i < datos.length; i++) {    
            let p = document.createElement("p");
            p.textContent = datos[i][0] + ": " + datos[i][1] + " pts";
            divResult.appendChild(p);
        }}
        catch  (error) {
            if (error instanceof TypeError) {
                // Manejar el error TypeError aquí
                let p = document.createElement("p");
                p.textContent = "No hay datos";
                divResult.appendChild(p);
        }
}}
showAllresutl()
