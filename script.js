creatediv();

console.log('hello, world!');

function creatediv () {
    var divFutContainer = document.getElementById("futContainer");

    var divJogador = document.createElement('div'); 
    div.className = "jogador"

    var divImgContainer = document.createElement('div'); 
    div.className = "imgContainer"

    var img= document.createElement('img');
    img.src = "https://i.pinimg.com/564x/3f/37/c3/3f37c39b32b8319ed4a479d364690294.jpg"
    img.width = 180;
    img.height = 140;

    
    divImgContainer.appendChild(img);
    divJogador.appendChild(divImgContainer);
    divFutContainer.appendChild(divJogador);

    var antes = document.getElementById("div1");
    document.body.insertBefore(divFutContainer, document.getElementById("depois"));
}






const colors = {
    barcelona: '#260063',
    arsenal: '#960000',
    real_madrid: '#ffffff',
    napoli: '#00a1d2',
    ajax: '#ff8701'
}


