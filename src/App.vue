<template>
  <div id="app">
    <v-table :rowHeight="46">
      <h1 class="title">with row height set</h1>
    </v-table>
    <v-table>
      <h1 class="title">with row height unset</h1>
    </v-table>
  </div>
</template>
<script>
import Table from "./table.vue";
export default {
  name: "app",
  components: { "v-table": Table },
};
</script>
<style scoped>
#app {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.title {
  text-align: center;
}
</style>
