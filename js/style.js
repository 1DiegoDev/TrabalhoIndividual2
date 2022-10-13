function funcaoDeClicar(){
    // pega o valor do select
    var select = document.getElementById("selecao").value

    // pega o valor do input
    var texto1 = document.getElementById("inputTexto1").value

    //define se o select é igual ao cesar (value do select), se sim, ele criptografa cesar, se não ele vai pro base 64
    if(select === 'cesar'){
        criptografarCesar(texto1)
    }else{
        criptografarBase64(texto1)
    }
}

// funcao para criptografar base64
function criptografarBase64(texto){

    // usa o metodo btoa pra codificar
    let codificado = window.btoa(texto);
    // setando valor do campo 2 como o codificado.
    document.getElementById("inputTexto2").value = codificado;

    // usa o metodo atob pra descodificar
   // let descodificado = window.atob(codificado);

    


    // setava o p no body (que tem id='demo') com os valores em HTML, usando o inner
    // aqui ele colocava os valores para preencher os campos como no exemplo anterior.
    //document.getElementById("demo").innerHTML = "Codificado: " + codificado + "<br>" + "Descodificado: " + descodificado;


}



// funcao para criptografar cesar.
function criptografarCesar(texto)
{
    //transforma o texto em maiusculo para padronizar
    texto = texto.toUpperCase();

    // faz o replace para codificar somente LETRAS, chamando a funcao rot13 e setando o valor do campo 2.
    document.getElementById("inputTexto2").value = texto.replace(/[A-Z]/g, rot13);

    //funcao rot13
    function rot13(corresp) {
        // codifica o correspondente com charCodeAt metodo
        const charCode = corresp.charCodeAt();
        //verifica charcode
        console.log(charCode)

        // retorna a string codificada transformando seus unicodes(numeros) em string.
        return String.fromCharCode(
                ((charCode + 13) <= 90) ? charCode + 13
                                        : (charCode + 13) % 90 + 64
            );
        
    }
}