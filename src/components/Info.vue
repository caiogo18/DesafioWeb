<template>
    <div class="informacao">
        <h2>Respostas:</h2>
        <div>
            <p>{{user.nome}}</p>
        </div>
        <div>
            <p>{{user.email}}</p>
        </div>
        <div>
            <p>{{user.idade}}</p>
        </div>
        <div>
            <p>{{user.celular}}</p>
        </div>
        <div>
            <p>{{user.senha}}</p>
        </div>
        <div>
            <p>{{user.confirmarSenha}}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'user']),
}
</script>

<style>
.informacao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
    font-size: 2rem;
    align-items: center;
}
.informacao h2{
    color: black;
}
</style>
