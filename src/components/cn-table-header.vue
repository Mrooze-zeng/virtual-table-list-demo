<template>
  <table class="cn-table-header">
    <colgroup>
      <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
    </colgroup>
    <thead>
      <tr v-if="withColumnCaption" class="cn-table-header-caption">
        <th v-for="col in columns" :key="col.name">
          <span v-if="col.caption">{{ col.caption.text }}</span>
        </th>
      </tr>
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
  computed: {
    withColumnCaption: function() {
      return this.columns.some((col) => col.caption);
    },
  },
  mounted() {
    // console.log("header --------", this.$slots);
  },
};
</script>

<style>
table tr.cn-table-header-caption th {
  background: #fff;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #e54d38;
  color: #fff;
  clip-path: polygon(calc(100% - 34.5px) 0%, 100% 100%, 100% 100%, 0 100%, 0 0);
}
table tr.cn-table-header-caption th:empty {
  background: transparent;
}
</style>
