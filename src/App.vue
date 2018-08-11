<template>
  <div class="bg-light " id="app">
    <div class="p-3 mb-5 bg-secondary text-white text-center" >
      <strong>Cadastro</strong>
    </div>
    <div class="container-fluid" v-if="!started">
      <div class="form-row">
        <div class="col-12 col-md-6 form-group" :class="{error: errors.has('nome')}">
          <label><strong>Nome:</strong></label>
          <input class="form-control" type="text" name="nome"  
            v-validate="!checkBoxStatus ? 'required|alpha_spaces|max:20' : ''" v-model="nome">
          <small class="form-text text-danger" v-if="errors.has('nome')">
            Só pode conter 20 letras do alfabeto.
          </small>
        </div>
        <div class="col-12 col-md-6 form-group"  :class="{error: errors.has('email')}">
          <label for="email"><strong>E-mail:</strong></label>
          <input class="form-control" type="text" name="email" 
            v-validate="!checkBoxStatus ? 'required|email' : ''" v-model="email">
          <small class="form-text text-danger" v-if="errors.has('email')">
            Preencha o campo com e-mail válido.
          </small>
        </div>
      </div>
      <div class="form-row">
        <div class="col-6 col-md-3 form-group"  :class="{error: errors.has('celular')}">
          <label for="celular"><strong>Celular:</strong></label><br/>
          <input class="form-control" type="text" name="celular" 
            v-validate="!checkBoxStatus ?'required|digits:11' : ''" v-model.number="celular">
          <small class="form-text text-danger" v-if="errors.has('celular')">
            Preencha o campo com um celular válido.
          </small>
        </div>
        <div class="col-6 col-md-3 form-group"  :class="{error: errors.has('idade')}">
          <label for="idade"><strong>Idade:</strong></label>
          <input class="form-control" style="width:90px" type="number" name="idade" 
            v-validate="!checkBoxStatus ?'required|min_value:0|max_value:60' : ''" v-model.number="idade">
          <small class="form-text text-danger" v-if="errors.has('idade')">
            Preencha o campo com idade até 60 anos.
          </small>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 form-group" :class="{error: errors.has('senha')}">
          <label for="senha"><strong>Senha:</strong></label>
          <input class="form-control" type="password" name="senha" 
            v-validate="!checkBoxStatus ? 'required|min:8|max:16' : ''" v-model.number="senha" ref="senha">
          <small class="form-text text-danger" v-if="errors.has('senha')">
            Preencha o campo com uma senha de 8 a 16 digítos.
          </small>
        </div>
        <div class="col-12 col-md-6 form-group"  :class="{error: errors.has('confirmarSenha')}">
          <label for="confirmarSenha"><strong>Confirmar Senha:</strong></label>
          <input class="form-control" type="password" name="confirmarSenha" 
            v-validate="!checkBoxStatus ?'required|confirmed:senha' : ''" v-model.number="confirmarSenha">
          <small class="form-text text-danger" v-if="errors.has('confirmarSenha')">
            As senhas não conferem.
          </small>
        </div>
      </div>
      <input type="checkbox" id="checkbox" value="true" v-model="checkBoxStatus">
      <label for="checkbox">Retirar validações de Input</label>
      <div class="text-center">
        <b-button class="col-md-2 pb-2" 
            v-on:click="conferirRespostas" :size="'sm'" :variant="'primary'" >
            Enviar
        </b-button>
      </div>
    </div>
    <div class="text-center" v-if="started">
      <Info :nome="nome" :email="email" :idade="idade" 
        :celular="celular" :senha="senha" :confirmarSenha="confirmarSenha" />
      <b-button class="col-md-2 pb-2 text-center" v-if="started"
        @click="started = false" :size="'sm'" :variant="'primary'">
        Reiniciar
      </b-button>
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
</style>
