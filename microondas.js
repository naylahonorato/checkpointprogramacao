const microondas = (prato,tempo)=>{
    if(typeof prato!= 'string' || typeof tempo!= 'number'){
        return 'Digite o nome de um prato e um numero'
    /* Pipoca */
    }
    else if(prato =="pipoca" && tempo>=10 && tempo<20){
        return 'Prato pronto,bom apetite'
    }
    else if(prato== 'pipoca' && tempo<10){
        return 'Tempo insuficiente'
    }
    else if(prato== 'pipoca' && tempo>=20 && tempo<30){
        return 'Comida queimou'
    }
    else if(prato== 'pipoca' && tempo>=30){
        return 'Kabumm'
    }
    
    /* Macarrão */
     else if(prato =="macarrao" && tempo>=8 && tempo<16){
        return 'Prato pronto,bom apetite'
    }
    else if(prato== 'macarrao' && tempo<8){
        return 'Tempo insuficiente'
    }
    else if(prato== 'macarrao' && tempo>=16 && tempo<24){
        return 'Comida queimou'
    }
    else if(prato== 'macarrao' && tempo>=24){
        return 'Kabumm'
    }

    /* Carne */
    else if(prato =="carne" && tempo>=15 && tempo<30){
        return 'Prato pronto,bom apetite'
    }
    else if(prato== 'carne' && tempo<15){
        return 'Tempo insuficiente'
    }
    else if(prato== 'carne' && tempo>=30 && tempo<45){
        return 'Comida queimou'
    }
    else if(prato== 'carne' && tempo>=45){
        return 'Kabumm'
    }

    /* Feijão */
    else if(prato =="feijao" && tempo>=12 && tempo<24){
        return 'Prato pronto,bom apetite'
    }
    else if(prato== 'feijao' && tempo<12){
        return 'Tempo insuficiente'
    }
    else if(prato== 'feijao' && tempo>=24 && tempo<36){
        return 'Comida queimou'
    }
    else if(prato== 'feijao' && tempo>=36){
        return 'Kabumm'
    }
    
    /* Brigadeiro */
    else if(prato =="brigadeiro" && tempo>=8 && tempo<16){
        return 'Prato pronto,bom apetite'
    }
    else if(prato== 'brigadeiro' && tempo<8){
        return 'Tempo insuficiente'
    }
    else if(prato== 'brigadeiro' && tempo>=16 && tempo<24){
        return 'Comida queimou'
    }
    else if(prato== 'brigadeiro' && tempo>=24){
        return 'Kabumm'
    }
    else if (prato != 'pipoca' || prato != 'macarrao' || prato != 'carne' || prato != 'feijao' || prato != 'brigadeiro' ){
        return 'Prato inexistente'
    }
}

console.log(microondas('peixe',2));



