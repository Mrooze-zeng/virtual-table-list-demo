<template>
  <div class="cn-table" ref="cnTable">
    <div
      class="cn-table-fixed-header"
      ref="headerStaticTable"
      @scroll.prevent="handleBodyScrollLeft"
    >
      <cn-table-header :columns="sortFixedColumns">
        <template v-slot:header="slotProps">
          <slot name="header" v-bind="slotProps"> </slot>
        </template>
      </cn-table-header>
      <cn-table-body
        :columns="sortFixedColumns"
        :dataSource="dataSource"
        :onScroll="handleTableScroll"
        ref="cnTableBody"
      >
        <template v-slot:body="slotProps">
          <slot name="body" v-bind="slotProps"> </slot>
        </template>
      </cn-table-body>
    </div>
    <div
      class="table-fixed-left"
      ref="leftStaticTable"
      :style="{ width: staticWidth }"
    >
      <cn-table-header :columns="sortFixedColumns">
        <template v-slot:header="slotProps">
          <slot name="header" v-bind="slotProps"> </slot>
        </template>
      </cn-table-header>
      <cn-table-body
        :columns="sortFixedColumns"
        :dataSource="dataSource"
        :onScroll="handleTableScroll"
        ref="fixedBody"
      >
        <template v-slot:body="slotProps">
          <slot name="body" v-bind="slotProps"> </slot>
        </template>
      </cn-table-body>
    </div>
  </div>
</template>

<script>
import CnTableHeader from "./cn-table-header.vue";
import CnTableBody from "./cn-table-body.vue";
import _ from "underscore";

const LENGTH = 3;

export default {
  name: "cn-table",
  components: {
    CnTableHeader,
    CnTableBody,
  },
  props: {
    dataSource: {
      type: Array,
      default: function() {
        return [];
      },
    },
    columns: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    sortFixedColumns: function() {
      let columns = this.columns;
      return columns
        .filter((col) => col.fixed)
        .concat(columns.filter((col) => !col.fixed));
    },
    staticWidth: function() {
      let width = 0;
      this.columns.forEach((col) => {
        if (col.fixed) {
          width += col.width;
        }
      });
      return width + "px";
    },
  },
  methods: {
    handleTableScroll: _.throttle(
      function(offset = 0, el, itemHeight = 0) {
        const fixedBody = this.$refs["fixedBody"].$el;
        const cnTableBody = this.$refs["cnTableBody"].$el;
        const { height } = cnTableBody.getBoundingClientRect();
        this.setBoundaryEmitter(offset, el, itemHeight);
        fixedBody.scrollTop = offset;
        cnTableBody.scrollTop = offset;
        fixedBody.style.height = height + "px";
      },
      0,
      { leading: true },
    ),
    setBoundaryEmitter: _.debounce(function(offset = 0, el, itemHeight) {
      if (offset === 0) {
        this.$emit("boundaryTop");
      } else if (
        Math.floor(
          itemHeight * this.dataSource.length -
            offset -
            el.getBoundingClientRect().height,
        ) < 2
      ) {
        this.$emit("boundaryBottom");
      }
    }, 50),
    handleBodyScrollLeft: _.throttle(
      function(event) {
        const dom = this.$refs["leftStaticTable"];
        if (event.target.scrollLeft) {
          dom.classList.add("table-fixed-left-scroll");
        } else {
          dom.classList.remove("table-fixed-left-scroll");
        }
      },
      10,
      { leading: true },
    ),
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  table-layout: fixed;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td {
  background: #fff;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

.cn-table {
  width: 500px;
  height: 350px;
  overflow: hidden;
  border: 1px solid #ccc;
  position: relative;
}
.cn-table-fixed-header {
  height: 100%;
  /* width: calc(100vh - 100%); */
  position: relative;
  overflow-y: hidden;
}

.table-fixed-left {
  border-right: 0;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background: #fff;
}
.table-fixed-left.table-fixed-left-scroll {
  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);
}
</style>
