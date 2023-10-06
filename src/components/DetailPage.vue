<template>
    <div>
        <h3>Detail</h3>
        <hr>
        <div class="my-2">
            <p>Name</p>
            <h4>{{ data.name }}</h4>
        </div>
        <div class="mb-2">
            <p>Age</p>
            <h4>{{ data.age }}</h4>
        </div>
        <div class="mb-2">
            <p>Job Description</p>
            <h4>{{ data.jobDescription }}</h4>
        </div>
        <div class="d-flex justify-content-end mt-3">
            <button type="button" class="btn btn-sm btn-secondary" @click="goBack">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail-page',
    data: function () {
        return {
            data: {},
            showModal: true
        }
    },
    created() {
        this.data = this.$route.params.data
        if (!this.data) {
            this.goBack()
        }
    },
    methods: {
        goBack: function () {
            this.$router.back()
        }
    }
}
</script>
<style>
p,
h4 {
    margin: 0;
}
</style>