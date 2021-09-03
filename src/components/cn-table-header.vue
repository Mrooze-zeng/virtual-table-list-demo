<template>
  <table class="cn-table-header">
    <colgroup>
      <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
    </colgroup>
    <thead>
      <tr v-if="withColumnCaption" class="cn-table-header-caption">
        <template v-for="col in columns">
          <template v-if="col.caption">
            <slot
              v-if="col.caption.slot"
              name="colcaption"
              v-bind:namekey="col.key"
              v-bind:caption="col.caption"
            ></slot>
          </template>
          <th v-else :key="col.name"></th>
        </template>
      </tr>
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          :class="{ 'fixed-th': col.fixed }"
        >
          <slot v-if="col.header" name="header" v-bind:column="col"></slot>
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
.cn-table-header-caption th {
  background: transparent;
  border: none;
}
</style>
