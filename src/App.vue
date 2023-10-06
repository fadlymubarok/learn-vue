<template>
  <div class="container-fluid p-0" id="app">
    <nav class="navbar bg-light p-3">
      <h1 class="text-danger fs-3">Training Vue & Bootstrap vue</h1>
    </nav>

    <div class="container w-75 mt-5 mx-auto border border-1 border-secondary rounded">
      <div class="m-4">
        <router-view></router-view>
      </div>
    </div>
  </div>

  <!-- Modal -->
</template>

<script>
export default {
  data: function () {
    return {
      dataOffice: [
        {
          id: 0,
          name: 'John Doe',
          age: 34,
          jobDescription: 'Gardener'
        },
        {
          id: 1,
          name: 'Emily',
          age: 30,
          jobDescription: 'Data Analyst'
        },
      ]
    }
  },
  provide: function () {
    return {
      'dataOffice': this.dataOffice
    }
  }
}
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.css';
</style>