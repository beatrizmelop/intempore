// MENU HAMBÚRGUER //

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu-menu");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ÁREA DE LOGIN //

function logar () {
    document.getElementById('menu-login').style.width = '100%';
    document.getElementById('menu-login').style.opacity = '100%';
    document.getElementById('menu-login').style.transition = 'all 1s ease';

}

function fechar () {
    document.getElementById('menu-login').style.width = '0';
    document.getElementById('menu-login').style.opacity = '0%';
    document.getElementById('menu-login').style.transition = 'all 1s ease-out';

}

let formSignin = document.querySelector('#signin')
let formSignup = document.querySelector('#signup')
let btnColor = document.querySelector('.btnColor')
let containerLogin = document.querySelector('.container-login')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
    containerLogin.style.height = "350px"
    containerLogin.style.transition = "all 1s ease-out"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
    containerLogin.style.height = "650px"
    containerLogin.style.transition = "all 1s ease-out"
})

// API CEP //

function erroApi(){
  document.getElementById('endereco').value = 'CEP não encontrado!';
  document.getElementById('endereco').style.border = "1px solid red"
  document.getElementById('endereco').style.color = "red"
  document.getElementById('endereco').style.transition = "all 0.5s ease-out"

  document.getElementById('bairro').value = 'Bairro não encontrado!';
  document.getElementById('bairro').style.border = "1px solid red"
  document.getElementById('bairro').style.color = "red"
  document.getElementById('bairro').style.transition = "all 0.5s ease-out"

  document.getElementById('cidade').value = 'Cidade não encontrada!';
  document.getElementById('cidade').style.border = "1px solid red"
  document.getElementById('cidade').style.color = "red"
  document.getElementById('cidade').style.transition = "all 0.5s ease-out"

  document.getElementById('numero').value = 'Número não encontrado!';
  document.getElementById('numero').style.border = "1px solid red"
  document.getElementById('numero').style.color = "red"
  document.getElementById('numero').style.transition = "all 0.5s ease-out"

  return erroApi
}

function okApi(){
  document.getElementById('endereco').style.border = "1px solid rgb(158, 157, 157)"
  document.getElementById('endereco').style.backgroundColor = "white"
  document.getElementById('endereco').style.color = "black"
  document.getElementById('endereco').style.transition = "all 0.5s ease-out"

  document.getElementById('bairro').style.border = "1px solid rgb(158, 157, 157)"
  document.getElementById('bairro').style.backgroundColor = "white"
  document.getElementById('bairro').style.color = "black"
  document.getElementById('bairro').style.transition = "all 0.5s ease-out"

  document.getElementById('cidade').style.border = "1px solid rgb(158, 157, 157)"
  document.getElementById('cidade').style.backgroundColor = "white"
  document.getElementById('cidade').style.color = "black"
  document.getElementById('cidade').style.transition = "all 0.5s ease-out"


  document.getElementById('numero').style.border = "1px solid rgb(158, 157, 157)"
  document.getElementById('numero').style.backgroundColor = "white"
  document.getElementById('numero').style.color = "black"
  document.getElementById('numero').style.transition = "all 0.5s ease-out"

  return okApi
}

const limparFormulario = (endereco) =>{
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('numero').value = '';
}


const preencherFormulario = (endereco) =>{
  document.getElementById('endereco').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('numero').value = endereco.complemento;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
  limparFormulario();
  
  const cep = document.getElementById('cep').value.replace("-","");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)){
      const dados = await fetch(url);
      const endereco = await dados.json();
      if (endereco.hasOwnProperty('erro')){
          erroApi()
      }else {
          preencherFormulario(endereco);
          okApi()
          
      }
  }else{
      erroApi()
  }
   
}

document.getElementById('cep')
      .addEventListener('focusout',pesquisarCep);

