<template>
  <div id="app">
    <div class="p-3 mb-5 bg-secondary text-white">
      <strong>Cadastro</strong></div>
    <div class="d-flex align-items-center flex-column bg-white mb-3 ">
      <div v-if="!started" :class="{error: errors.has('nome')}">
        <label><strong>Nome:</strong></label><br/>
        <input type="text" name="nome"  
        v-validate="!checkBoxStatus ? 'required|alpha_spaces|max:20' : ''" v-model="nome"><br/>
        <span class="text-alarm" v-if="errors.has('nome')">Só pode conter 20 letras do alfabeto.</span>
      </div>
      <div v-if="!started" :class="{error: errors.has('email')}">
        <label for="email"><strong>E-mail:</strong></label><br/>
        <input type="text" name="email" 
        v-validate="!checkBoxStatus ? 'required|email' : ''" v-model="email"><br/>
        <span class="error" v-if="errors.has('email')">Preencha o campo com e-mail válido.</span>
      </div>
      <div v-if="!started" :class="{error: errors.has('idade')}">
        <label for="idade"><strong>Idade:</strong></label><br/>
        <input type="text" name="idade" v-validate="!checkBoxStatus ?'required|min_value:0|max_value:60' : ''" v-model.number="idade"><br/>
        <span class="error" v-if="errors.has('idade')">Preencha o campo com idade até 60 anos.</span>
      </div>
      <div v-if="!started" :class="{error: errors.has('celular')}">
        <label for="celular"><strong>Celular:</strong></label><br/>
        <input type="text" name="celular" v-validate="!checkBoxStatus ?'required|digits:11' : ''" v-model.number="celular"><br/>
        <span class="error" v-if="errors.has('celular')">Preencha o campo com um celular válido.</span>
      </div>
      <div v-if="!started" :class="{error: errors.has('senha')}">
        <label for="senha"><strong>Senha:</strong></label><br/>
        <input type="password" name="senha" 
        v-validate="!checkBoxStatus ? 'required|min:8|max:16' : ''" v-model.number="senha" ref="senha"><br/>
        <span class="error" v-if="errors.has('senha')">Preencha o campo com uma senha de 8 a 16 digítos.</span>
      </div><div v-if="!started" :class="{error: errors.has('confirmarSenha')}">
        <label for="confirmarSenha"><strong>Confirmar Senha:</strong></label><br/>
        <input type="password" name="confirmarSenha" 
        v-validate="!checkBoxStatus ?'required|confirmed:senha' : ''" v-model.number="confirmarSenha"><br/>
        <span class="error" v-if="errors.has('confirmarSenha')">As senhas não conferem.</span>
      </div>
      <div class="respostas" v-if="started">
      <Info :nome="nome" :email="email" :idade="idade" :celular="celular" :senha="senha" :confirmarSenha="confirmarSenha" />
    
    </div>
    <div v-if="!started">
      <input type="checkbox" id="checkbox" value="true" v-model="checkBoxStatus">
      <label for="checkbox">Retirar validações de Input</label>
    </div>
      <b-button class="col-md-4 pb-2" v-if="!started" 
      v-on:click="conferirRespostas" :size="'sm'" :variant="'primary'" >Enviar</b-button>
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
    conferirRespostas: function(){
      this.$validator.validateAll().then(() => {
        if(this.errors.any()){
          this.started = false
          return 
        }
        else{
          this.started = true
          return
        }
      })
    }
  },
  data: function() {
    return {
      started: false,
      nome: null,
      email: null,
      idade: null,
      celular: null,
      senha: null,
      confirmarSenha: null,
      checkBoxStatus: false

    }
  }
}
</script>
<style>
/*
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
.error span{
  color: red;
  font-size: 1rem
}
*/
</style>
