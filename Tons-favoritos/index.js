function adicionarComentario() {
    let inputComentario = document.getElementsByName(`novo-comentario`)

    let textoDigitado = inputComentario[0].value;
    
    let novosComentarios = document.getElementById(`novo-comentario`);

    novosComentarios.innerHTML += `<P>Nova música: ${textoDigitado}</p>` 

   
}

