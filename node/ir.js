let valor = 0

let final = 0

 

const imposto = (salario)=>{

    if(salario <= 1500){

        console.log("Seu salario é "+salario+", e você está isento")

    }

    else if (salario > 1500 || salario < 2500){
        valor = salario*0.15
        final = salario - valor
        console.log ("Seu salario é"+salario+", seu imposto de renda é "+valor+
        ", seu salario final é"+final)
    }
    else if(salario >= 2500){
        valor = salario * 0.25
        final = salario - valor
        console.log("Seu salario é"+salario+", seu imposto de renda é "+valor+"R$",
        "Seu salario final é "+final)
    }
}
imposto(1500)