<template>
  <table class="cn-table-header">
    <colgroup>
      <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.name">
          <template v-if="col.slot">
            <slot name="header" :column="col" :data="dataSource"></slot>
          </template>
          <template v-else>
            <span>{{ col.title }}</span>
          </template>
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
    dataSource: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  methods: {
    handleClick(arg) {
      console.log(arg);
    },
  },
  mounted() {
    // console.log("header --------", this.$slots);
  },
};
</script>

<style></style>
