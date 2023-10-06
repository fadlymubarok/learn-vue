<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group id="input-name" label="Name" label-for="input-name" class="mb-3">
                <b-form-input id="input-name" v-model="data.name" type="text">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-age" label="age" label-for="input-age" class="mb-3">
                <b-form-input id="input-age" v-model="data.age" type="number">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-jobDescription" label="job description" label-for="input-jobDescription" class="mb-3">
                <b-form-textarea id="input-jobDescription" v-model="data.jobDescription" type="text">
                </b-form-textarea>
            </b-form-group>

            <div class="d-flex justify-content-end gap-2">
                <b-button type="button" variant="secondary" @click="CloseModal">Close</b-button>
                <b-button type="submit" variant="primary">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>
  
<script>
export default {
    name: 'input-component',
    data() {
        return {
            data: {
                name: '',
                age: '',
                jobDescription: '',
            },
        }
    },
    emits: ['close-modal', 'create-data'],
    methods: {
        onSubmit: function (event) {
            event.preventDefault()
            this.$emit('create-data', this.data)
        },
        CloseModal: function () {
            this.$emit('close-modal')
        },
    }
}
</script>