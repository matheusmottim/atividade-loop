for (let i = 1; i <=5; i++){
    console.log("numero: " +i);
}

let contador = 3;
while (contador>0) {
    console.log("tempo restante:"+ contador);
    contador--;
}
console.log("acabou!");
for (let i = 1; i <=5; i++){
    console.log("numero: " +i);
}


for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {

        console.log(i + " é par");
    }else{
        console.log(i+ " é impar");
    }
}

for (let i = 1; i <=10; i++){
    if (i===4) {
        break;
    }
    console.log ("contando: +i");
}

for (let i = 1; i <=5; i++) {
    if (i ===3) {
        continue;
    }
    console.log("i =" + i);
}

//let x = 1;
//while (x>0) {
 //   console.log("rodando...");
//}