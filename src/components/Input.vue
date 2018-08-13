<template>
    <div :class="size">
        <div class="form-group" :class="{error: errors.has(inputName)}">
            <label><strong>{{label}}</strong></label>
            <input class="form-control" :type="type" :name="inputName"
                v-validate="!checkBox ? validation  : ''" v-model="user[inputName]">
            <small class="form-text text-danger" v-if="errors.has(inputName)">
                {{errorMessage}}
            </small>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState([
    'user']),
    data: function() {
        return {
        valid: false
        }
    },
    props: {
        inputName: null,
        label: null,
        type: null,
        validation: null,
        errorMessage: null,
        size: null,
        checkBox: null
    },
    methods: {
    conferirResposta: function(){
      this.$validator.validateAll().then(() => {
        if(this.errors.any()){
          this.valid = false
          return 
        }
        else{
          this.valid = true
          return
        }
      })
    }
  },
}
</script>

<style>

</style>
