<template>
    <div class="text-left">
        <h3 class="text-left px-3 mb-3">Respostas:</h3>
        <div class="h5 px-5">
            <div class="mb-2">Nome: {{user.nome}}</div>
            <div class="mb-2">E-mail: {{user.email}}</div>
            <div class="mb-2">Idade: {{user.idade}}</div>
            <div class="mb-2">Celular: {{user.celular}}</div>
            <div class="d-flex flex-row mb-2 ">
                Senha: 
                <div class="px-2" v-if="show">{{user.senha}}</div>
                <div class="px-2" v-else>************</div>
                <b-button class="col-md-1 pb-2 text-center"
                    @click="show=!show" :size="'sm'" :variant="'dark'">
                    Mostrar
                </b-button>
            </div>
        
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'user']),
    data: function(){
        return{
            show: false
        }
    }
}
</script>

<style>
</style>
