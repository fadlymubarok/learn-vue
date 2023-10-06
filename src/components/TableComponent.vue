<template>
    <div>
        <b-table responsive striped hover :items="dataOffices" :fields="fields" @row-clicked="OpenDetail"></b-table>

        <div class="d-flex justify-content-end">
            <b-button variant="primary" class="btn-sm" @click="ShowModalCreate">+ Create</b-button>
            <b-modal v-model="showModal" title="Form Create" hide-footer>
                <InputComponent @close-modal="CloseModal" @create-data="CreateData"></InputComponent>
            </b-modal>
        </div>
    </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
export default {
    name: 'table-component',
    data: function () {
        return {
            showModal: false,
            fields: ['name', 'age', 'jobDescription'],
            dataOffices: this.dataOffice
        }
    },
    inject: ['dataOffice'],
    components: {
        InputComponent
    },
    methods: {
        ShowModalCreate: function () {
            this.showModal = true
        },
        CloseModal: function () {
            this.showModal = false
        },
        CreateData: function (data) {
            this.dataOffices.push(data);
            this.CloseModal()
        },
        OpenDetail: function (val) {
            this.$router.push({ name: 'detail', params: { data: val } })
        }
    },
}
</script>

<style>
.close {
    display: none;
}

.modal-backdrop {
    opacity: 0.5 !important;
}
</style>