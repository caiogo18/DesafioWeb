<template>
    <div class="informacao">
        <div>
            <p>{{nome}}</p>
        </div>
        <div>
            <p>{{email}}</p>
        </div>
        <div>
            <p>{{idade}}</p>
        </div>
        <div>
            <p>{{celular}}</p>
        </div>
        <div>
            <p>{{senha}}</p>
        </div>
        <div>
            <p>{{checarSenha}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: {
      nome: null,
      email: null,
      idade: null,
      celular: null,
      senha: null,
      checarSenha: null
  }
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
</style>
