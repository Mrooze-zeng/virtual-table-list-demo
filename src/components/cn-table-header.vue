<template>
  <table class="cn-table-header">
    <colgroup>
      <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.name">
          <slot v-if="col.slot" name="header" v-bind:column="col"></slot>
          <span v-else>{{ col.title }}</span>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
export default {
  name: "cn-table-header",
  props: {
    columns: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  mounted() {
    // console.log("header --------", this.$slots);
  },
};
</script>

<style></style>
