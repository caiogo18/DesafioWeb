<template>
  <div id="app">
    <div class="title"><strong>Cadastro</strong></div>
    <div class="form">
      <div v-if="!started">
        <label for="nome"><strong>Nome: </strong></label><br/>
        <input type="text" id="nome" 
          v-model.trim="nome"
          title="deu ruim">
        <div class="erro" v-if="nomeErro!=null" >{{nomeErro}}</div>
      </div>
      <div v-if="!started">
        <label for="email"><strong>E-mail:</strong></label><br/>
        <input type="text" id="email" 
          v-model.trim="email">
        <div class="erro" v-if="emailErro!=null" >{{emailErro}}</div>
      </div>
      <div v-if="!started">
        <label for="idade"><strong>Idade:</strong></label><br/>
        <input type="number" id="idade" 
          v-model.number="idade">
        <div class="erro" v-if="idadeErro!=null" >{{idadeErro}}</div>
      </div>
      <div v-if="!started">
        <label for="celular"><strong>Celular: </strong></label><br/>
        <input type="text" id="celular" 
          v-model.trim="celular">
        <div class="erro" v-if="celularErro!=null" >{{celularErro}}</div>
      </div>
      <div v-if="!started">
        <label for="senha"><strong>Senha: </strong></label><br/>
        <input type="password" id="senha" 
          v-model.trim="senha">
        <div class="erro" v-if="senhaErro!=null" >{{senhaErro}}</div>
      </div>
      <div v-if="!started">
        <label for="checarSenha"><strong>Confirmar Senha: </strong></label><br/>
        <input type="password" id="checarSenha" 
          v-model.trim="confirmarSenha">
        <div class="erro" v-if="confirmarErro!=null" >{{confirmarErro}}</div>
      </div>
      <div class="respostas" v-if="started">
      <Info :nome="nome" :email="email" :idade="idade" :celular="celular" :senha="senha" :confirmarSenha="confirmarSenha" />
    </div>
      <button v-if="!started" v-on:click="mensagemErro">Enviar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>


  </div>
</template>

<script>
import Info from './components/Info'
export default {
  name: 'App',
  components: { Info },
  methods: {
    onlyLetters: function(){
    var i;
    var vStr = this.nome.split
      for(i=0;i< vStr.length;i++){
        if(!(vStr[i]>='A'&&vStr[i]<='Z')||(vStr[i]>='a'&&vStr[i]<='z')) { 
          return false; 
        }
      }
      return true;
  },
    mensagemErro: function(){
      var erros = 0;
      if(this.nome.length>20){
        this.nomeErro = "*Preencha com até 20 caracteres alfabéticos[a-z].";
        erros++;
      }
      else if(this.nome.length==0){
        this.nomeErro = "*Esse campo precisa ser preenchido.";
        erros++;
      }
      if(this.idade==null){
        this.idadeErro = "*Esse campo precisa ser preenchido.";
        erros++;
      }
      else if(this.idade>60 || this.idade<0){
        this.idadeErro = "*Preencha com uma idade válida";
        erros++;
      }
      if(this.celular==null){
        this.celularErro = "*Esse campo precisa ser preenchido.";
        erros++;
      }
      else if(!(this.celular>10000000000 && this.celular<100000000000)){
        this.celularErro = "*Preencha sem símbolos e com o número do ddd Ex:21912345678";
        erros++;
      }
      if(this.email==null){
        this.emailErro = "*Esse campo precisa ser preenchido.";
        erros++;
      }
      if(this.senha==null){
        this.senhaErro = "*Esse campo precisa ser preenchido.";
        erros++;
      }
      if(this.confirmarSenha!=this.senha){
        this.confirmarErro = "*As senhas não correspondem.";
        erros++;
      }
      if(erros==0){
        this.started = true;
      }
    }
  },
  data: function() {
    return {
      started: false,
      nome: "",
      email: null,
      idade: null,
      celular: null,
      senha: null,
      confirmarSenha: null,
      nomeErro: null,
      idadeErro: null,
      celularErro: null,
      emailErro: null,
      senhaErro: null,
      confirmarErro: null,

    }
  }



}
</script>
<style>
*{
  box-sizing: border-box;
  font-family:  sans-serif;

}
body{
  color: #fff;
  background: lightgray;
}
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title{
  background-color: #351b6f;
  font-size: 2rem;
  width: 100%;
  padding: 10px
}
.form {
  display: flex;
  color: darkgray;
  background: #fff;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto;
  text-align: left,
}
.form input {
  font-size: 1.5rem;
  color: darkgray;
  position: relative;
  border: 1px solid darkgray;
}
.form button{
  background: #007aff;
  color: #fff;
  padding: 10px
}
.erro{
  color: red;
  font-size: 1rem
}
</style>
