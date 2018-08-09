<template>
  <div id="app">
    <div class="title"><strong>Cadastro</strong></div>
    <div class="form">
      <div v-if="!started">
        <label for="nome"><strong>Nome: </strong></label>
        <div class="erro" v-if="nomeErro">*Só pode usar 20 caracteres alfabéticos.</div><br/>
        <input type="text" id="nome" 
          v-model.number="nome">
      </div>
      <div v-if="!started">
        <label for="email">E-mail: </label><br/>
        <input type="text" id="email" 
          v-model.number="email">
      </div>
      <div v-if="!started">
        <label for="idade">Idade: </label><br/>
        <input type="number" id="idade" min="1" max="60"
          v-model.number="idade">
      </div>
      <div v-if="!started">
        <label for="celular">Celular: </label><br/>
        <input type="text" id="celular" 
          v-model.number="celular">
      </div>
      <div v-if="!started">
        <label for="senha">Senha: </label><br/>
        <input type="password" id="senha" 
          v-model.number="senha">
      </div>
      <div v-if="!started">
        <label for="checarSenha">Confirmar Senha: </label><br/>
        <input type="password" id="checarSenha" 
          v-model.number="checarSenha">
      </div>
      <div class="respostas" v-if="started">
      <Info :nome="nome" :email="email" :idade="idade" :celular="celular" :senha="senha" :checarSenha="checarSenha" />
    </div>
      <button v-if="!started" @click=" started=true">Enviar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>

  </div>
</template>

<script>
import Info from './components/Info'
export default {
  name: 'App',
  components: { Info },
  data: function() {
    return {
      started: false,
      nome: "",
      email: null,
      idade: null,
      celular: null,
      senha: null,
      checarSenha: null,
      nomeErro: false,
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
  text-align: left
}
.form input {
  font-size: 1.5rem;
  color: darkgray;
  margin-bottom: 30px;
  position: relative;
  border: 1px solid darkgray;
}
.form button{
  background: #007aff;
  color: #fff;
  padding: 10px
}
.form input:focus{
  border-color: black;
}
.form input:invalid{
  border: 2px dashed red;
}
.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.erro{
  color: red;
  font-size: 1rem
}
</style>
