var selecao = 0;

var linha1 = 0;
var linha2 = 0;
let questao = 0;
// selecionando o espaço para por a palavra



// selecionando as questões
function f20(){
    
    document.getElementById("teladecarregamento").style="display:block";
    document.getElementById("questao").style="display:none";
    document.getElementById("telainicio").style="display: none";


    setTimeout(function() {
        document.getElementById("teladecarregamento").style="display:none";
        questao ++;
        // controle de questões na tela
        if (questao == 1) {
            f21();
        }
        if (questao == 2) {
            f22();
        }
        if (questao == 3) {
            f23();
        }
        if( questao >3 || questao < 0 ){
            alert("fim do jogo")
            document.getElementById("telainicio").style="display: block";
        }
        console.log(questao)
      }, 3000);

}


{ // questao 1
// questão 1
function f21(){
    document.getElementById("questao").style="display: block";
}

        
            function f4(){
                document.getElementById("palavra1").style="color:red"
                document.getElementById("palavra2").style="color:#00a0b0"
                selecao = 1;
                console.log(selecao);
            }
            function f5 (){
                document.getElementById("palavra2").style="color:red"
                document.getElementById("palavra1").style="color:#00a0b0"
                selecao = 2;
                console.log(selecao);
        
            }
        
            // Incluindo os valores nos lugares deviiiiiiiidos
            function f10(){
                if (selecao == 2){
                    document.getElementById("palavra2").style="color:#00a0b0"
                    document.getElementById("palavra2").innerHTML="Carro"
                    linha2 = 1;
                }
            if (selecao ==1){
                document.getElementById("palavra1").style="color:#00a0b0"
                document.getElementById("palavra1").innerHTML="Carro"
                linha1 = 1;
            }
                if (selecao != 1  && selecao != 2){
                alert(" selecione um espaço para escrever !")
                }
            }
            function f11(){
                if (selecao == 2){
                    document.getElementById("palavra2").style="color:#00a0b0"
                    document.getElementById("palavra2").innerHTML="Pneu"
                    linha2 = 2
                }
            if (selecao ==1){
                document.getElementById("palavra1").style="color:#00a0b0"
                document.getElementById("palavra1").innerHTML="Pneu"
                linha1 = 2
            }
                if (selecao != 1  && selecao != 2){
                alert(" selecione um espaço para escrever !")
                }
        
            }
            function f12(){
                if (selecao == 2){
                    document.getElementById("palavra2").style="color:#00a0b0"
                    document.getElementById("palavra2").innerHTML="Freio"
                    linha2 = 3
                }
            if (selecao ==1){
                document.getElementById("palavra1").style="color:#00a0b0"
                document.getElementById("palavra1").innerHTML="Freio"
                linha1 = 3
            }
                if (selecao != 1  && selecao != 2){
                alert(" selecione um espaço para escrever !")
                }
        
            }
            function f13(){
                if (selecao == 2){
                    document.getElementById("palavra2").style="color:#00a0b0"
                    document.getElementById("palavra2").innerHTML="Oleo"
                    linha2 = 4
                }
            if (selecao ==1){
                document.getElementById("palavra1").style="color:#00a0b0"
                document.getElementById("palavra1").innerHTML="Oleo"
                linha1 = 4
            }
                if (selecao != 1  && selecao != 2){
                alert(" selecione um espaço para escrever !")
                }
            }
        
            function f18(){
                console.log("O valor da primeira linha é: "+linha1+"\n"+"O valor da segunda linha é : "+linha2)
                if (linha1==3 && linha2==2){
                    document.getElementById("fotoprincipal").src="img/2.jpg"
                    document.getElementById("vitoria").style="display:block;color: green;"
                    document.getElementById("volta").style="display:block;color:#ff6161";
                    alert("Parabens você ganhou !")
                    questao++;
                    f22();  

                }else{
                    if(linha1!= 0 || linha2!=0){
                        document.getElementById("fotoprincipal").src="img/3.jpg"
                        document.getElementById("derrota").style="display:blockcolor: red;"
                        document.getElementById("volta").style="display:block;color:#ff6161";
        
        
                    }
        
                }
                if (linha1==0 || linha2==0 ){
                    alert("Selecione Todas as Alternativas ")
                }
            }

}

{ // questão 2
    
    function f22(){
        document.getElementById("questao").style="display: block";
        document.getElementById("questaotitulo").innerHTML="Questão numero dois"
    }
    
            
                function f4(){
                    document.getElementById("palavra1").style="color:red"
                    document.getElementById("palavra2").style="color:#00a0b0"
                    selecao = 1;
                    console.log(selecao);
                }
                function f5 (){
                    document.getElementById("palavra2").style="color:red"
                    document.getElementById("palavra1").style="color:#00a0b0"
                    selecao = 2;
                    console.log(selecao);
            
                }
            
                // Incluindo os valores nos lugares deviiiiiiiidos
                function f10(){
                    if (selecao == 2){
                        document.getElementById("palavra2").style="color:#00a0b0"
                        document.getElementById("palavra2").innerHTML="Carro"
                        linha2 = 1;
                    }
                if (selecao ==1){
                    document.getElementById("palavra1").style="color:#00a0b0"
                    document.getElementById("palavra1").innerHTML="Carro"
                    linha1 = 1;
                }
                    if (selecao != 1  && selecao != 2){
                    alert(" selecione um espaço para escrever !")
                    }
                }
                function f11(){
                    if (selecao == 2){
                        document.getElementById("palavra2").style="color:#00a0b0"
                        document.getElementById("palavra2").innerHTML="Pneu"
                        linha2 = 2
                    }
                if (selecao ==1){
                    document.getElementById("palavra1").style="color:#00a0b0"
                    document.getElementById("palavra1").innerHTML="Pneu"
                    linha1 = 2
                }
                    if (selecao != 1  && selecao != 2){
                    alert(" selecione um espaço para escrever !")
                    }
            
                }
                function f12(){
                    if (selecao == 2){
                        document.getElementById("palavra2").style="color:#00a0b0"
                        document.getElementById("palavra2").innerHTML="Freio"
                        linha2 = 3
                    }
                if (selecao ==1){
                    document.getElementById("palavra1").style="color:#00a0b0"
                    document.getElementById("palavra1").innerHTML="Freio"
                    linha1 = 3
                }
                    if (selecao != 1  && selecao != 2){
                    alert(" selecione um espaço para escrever !")
                    }
            
                }
                function f13(){
                    if (selecao == 2){
                        document.getElementById("palavra2").style="color:#00a0b0"
                        document.getElementById("palavra2").innerHTML="Oleo"
                        linha2 = 4
                    }
                if (selecao ==1){
                    document.getElementById("palavra1").style="color:#00a0b0"
                    document.getElementById("palavra1").innerHTML="Oleo"
                    linha1 = 4
                }
                    if (selecao != 1  && selecao != 2){
                    alert(" selecione um espaço para escrever !")
                    }
                }
            
                function f18(){
                    console.log("O valor da primeira linha é: "+linha1+"\n"+"O valor da segunda linha é : "+linha2)
                    if (linha1==3 && linha2==2){
                        document.getElementById("fotoprincipal").src="img/2.jpg"
                        document.getElementById("vitoria").style="display:block;color: green;"
                        document.getElementById("volta").style="display:block;color:#ff6161";
                        setTimeout(function() {
                            
                        }, 1200);
            
                    }else{
                        if(linha1!= 0 || linha2!=0){
                            document.getElementById("fotoprincipal").src="img/3.jpg"
                            document.getElementById("derrota").style="display:blockcolor: red;"
                            document.getElementById("volta").style="display:block;color:#ff6161";
            
                            setTimeout(function() {
                                
                            }, 1200);
            
            
                        }
            
                    }
                    if (linha1==0 || linha2==0 ){
                        alert("Selecione Todas as Alternativas ")
                    }
                }
    
    }

{ // questão 3
    
        function f23(){
            document.getElementById("questao").style="display: block";
            document.getElementById("questaotitulo").innerHTML="Questão numero três"
        }
        
                
                    function f4(){
                        document.getElementById("palavra1").style="color:red"
                        document.getElementById("palavra2").style="color:#00a0b0"
                        selecao = 1;
                        console.log(selecao);
                    }
                    function f5 (){
                        document.getElementById("palavra2").style="color:red"
                        document.getElementById("palavra1").style="color:#00a0b0"
                        selecao = 2;
                        console.log(selecao);
                
                    }
                
                    // Incluindo os valores nos lugares deviiiiiiiidos
                    function f10(){
                        if (selecao == 2){
                            document.getElementById("palavra2").style="color:#00a0b0"
                            document.getElementById("palavra2").innerHTML="Carro"
                            linha2 = 1;
                        }
                    if (selecao ==1){
                        document.getElementById("palavra1").style="color:#00a0b0"
                        document.getElementById("palavra1").innerHTML="Carro"
                        linha1 = 1;
                    }
                        if (selecao != 1  && selecao != 2){
                        alert(" selecione um espaço para escrever !")
                        }
                    }
                    function f11(){
                        if (selecao == 2){
                            document.getElementById("palavra2").style="color:#00a0b0"
                            document.getElementById("palavra2").innerHTML="Pneu"
                            linha2 = 2
                        }
                    if (selecao ==1){
                        document.getElementById("palavra1").style="color:#00a0b0"
                        document.getElementById("palavra1").innerHTML="Pneu"
                        linha1 = 2
                    }
                        if (selecao != 1  && selecao != 2){
                        alert(" selecione um espaço para escrever !")
                        }
                
                    }
                    function f12(){
                        if (selecao == 2){
                            document.getElementById("palavra2").style="color:#00a0b0"
                            document.getElementById("palavra2").innerHTML="Freio"
                            linha2 = 3
                        }
                    if (selecao ==1){
                        document.getElementById("palavra1").style="color:#00a0b0"
                        document.getElementById("palavra1").innerHTML="Freio"
                        linha1 = 3
                    }
                        if (selecao != 1  && selecao != 2){
                        alert(" selecione um espaço para escrever !")
                        }
                
                    }
                    function f13(){
                        if (selecao == 2){
                            document.getElementById("palavra2").style="color:#00a0b0"
                            document.getElementById("palavra2").innerHTML="Oleo"
                            linha2 = 4
                        }
                    if (selecao ==1){
                        document.getElementById("palavra1").style="color:#00a0b0"
                        document.getElementById("palavra1").innerHTML="Oleo"
                        linha1 = 4
                    }
                        if (selecao != 1  && selecao != 2){
                        alert(" selecione um espaço para escrever !")
                        }
                    }
                
                    function f18(){
                        console.log("O valor da primeira linha é: "+linha1+"\n"+"O valor da segunda linha é : "+linha2)
                        if (linha1==3 && linha2==2){
                            document.getElementById("fotoprincipal").src="img/2.jpg"
                            document.getElementById("vitoria").style="display:block;color: green;"
                            document.getElementById("volta").style="display:block;color:#ff6161";
                            setTimeout(function() {
                            }, 1200);
                
                        }else{
                            if(linha1!= 0 || linha2!=0){
                                document.getElementById("fotoprincipal").src="img/3.jpg"
                                document.getElementById("derrota").style="display:blockcolor: red;"
                                document.getElementById("volta").style="display:block;color:#ff6161";
                
                                setTimeout(function() {
                                    
                                }, 1200);
                            }
                
                        }
                        if (linha1==0 || linha2==0 ){
                            alert("Selecione Todas as Alternativas ")
                        }
                    }
        
        }
