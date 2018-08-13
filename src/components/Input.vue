<template>
    <div :class="size">
        <div class="form-group" :class="{error: errors.has(inputName)}">
            <label><strong>{{label}}</strong></label>
            <input class="form-control" :type="type" :name="inputName"
                v-validate="!checkBox ? validation : ''" v-model="user[inputName]" :ref="inputName">
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
    props: {
        inputName: null,
        label: null,
        type: null,
        validation: null,
        errorMessage: null,
        size: null,
        checkBox: null
    }
}
</script>

<style>

</style>
