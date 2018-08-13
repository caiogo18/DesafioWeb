<template>
  <div class="bg-light " id="app">
    <div class="h1 p-3 mb-5 bg-secondary text-white text-center" >
      <strong>Cadastro</strong>
    </div>
    <div class="container-fluid" v-if="!started">
      <div class="form-row">
        <Input inputName="nome" label="Nome:" type="text" validation="required|alpha_spaces|max:20"
          errorMessage="Só pode conter 20 letras do alfabeto." size="col-12 col-md-6"
          :checkBox="checkBoxStatus"/>
        <Input inputName="email" label="E-mail:" validation="required|email"
          errorMessage="Preencha o campo com e-mail válido." size="col-12 col-md-6"
          :checkBox="checkBoxStatus"/>
      </div>
      <div class="form-row">
        <Input inputName="celular" label="Celular:" type="text" validation="required|digits:11"
          errorMessage="Preencha o campo com um celular válido." size="col-6 col-md-2"
          :checkBox="checkBoxStatus"/>
        
        <Input inputName="idade" label="Idade:" type="number" 
          validation="required|min_value:0|max_value:60"
          errorMessage="Preencha o campo com idade até 60 anos." size="col-6 col-md-1"
          :checkBox="checkBoxStatus"/>
      </div>
      <div class="form-row">
        <Input inputName="senha" label="Senha:" type="password" 
          validation="required|min:8|max:16" errorMessage="Preencha o campo com uma senha de 8 a 16 digítos. " 
          size="col-12 col-md-6" :checkBox="checkBoxStatus"/>
        <Input inputName="confirmarSenha" label="Confirmar Senha:" type="password" 
          validation="required|confirmed:senha" errorMessage="As senhas não correspondem" 
          size="col-12 col-md-6" :checkBox="checkBoxStatus"/>
      </div>
      <input type="checkbox" id="checkbox" value="true" v-model="checkBoxStatus">
      <label for="checkbox">Retirar validações de Input</label>
      <div class="text-center">
        <b-button class="col-md-2 pb-2" 
            v-on:click="buttonHandler" :size="'sm'" :variant="'primary'" >
            Enviar
        </b-button>
      </div>
    </div>
    <div class="text-center" v-if="started">
      <Info/>
      <b-button class="col-md-2 pb-2 text-center" v-if="started"
        @click="started = false" :size="'sm'" :variant="'primary'">
        Reiniciar
      </b-button>
    </div>
  </div>
</template>

<script>
import Info from './components/Info'
import Input from './components/Input'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { Info , Input },
  computed: mapState([
    'user']),
  methods: {
    buttonHandler: function(){
      var i = 0
      var aux = this.$children
      for(i=0;aux[i]!=null;i++){
        aux[i].conferirResposta()
      }
      setTimeout(this.conferirRespostas,100)
    },
    conferirRespostas: function(){
      var valid = true
      var i = 0
      var aux = this.$children
      for(i=0;aux[i]!=null;i++){
        valid=valid&&aux[i].valid
      }
      this.started=valid
    }
  },
  data: function() {
    return {
      started: false,
      checkBoxStatus: false
    }
  }
}
</script>
<style>
</style>
