<template>
  <div class="cn-table-body" @scroll="handleBodyScrollTop" ref="cnTableBody">
    <div class="cn-table-body-phantom" ref="phantom"></div>
    <table :style="{ transform: transform }">
      <colgroup>
        <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
      </colgroup>
      <tbody>
        <tr v-for="(row, i) in visibleData" :key="i">
          <td v-for="col in columns" :key="col.name">
            <template v-if="col.slot">
              <slot name="body" v-bind:data="row" v-bind:column="col"></slot>
            </template>
            <template v-else>
              <span>
                {{ row[col.key] }}
              </span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import _ from "underscore";

export default {
  name: "cn-table-body",
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
    onScroll: {
      type: Function,
      default: function() {},
    },
  },
  data() {
    return {
      start: 0,
      end: 1,
      itemHeight: 0,
      visibleCount: 0,
      transform: "",
    };
  },
  computed: {
    visibleData: function() {
      return this.dataSource.slice(
        Math.max(this.start, 0),
        Math.min(this.end, this.dataSource.length),
      );
    },
  },
  methods: {
    handleBodyScrollTop: _.throttle(
      function(event) {
        const scrollTop = event.target.scrollTop;

        this.onScroll(scrollTop, event.target, this.itemHeight);

        this.setUpPositionWithBuf(scrollTop, this.visibleCount);
        // this.setUpPositionNormal(scrollTop);
      },
      0,
      { leading: true },
    ),
    setUpPositionWithBuf: function(scrollTop, bufSize) {
      let start = Math.floor(scrollTop / this.itemHeight);
      let transform = 0;
      if (start >= bufSize) {
        transform = this.itemHeight * (start - bufSize);
        this.start = start - bufSize;
      } else {
        this.start = 0;
      }
      this.transform = `translate3d(0,${transform}px,0)`;
      this.end = start + this.visibleCount + bufSize;
    },
    setUpPositionNormal: function(scrollTop) {
      let start = Math.floor(scrollTop / this.itemHeight);
      let transform = start * this.itemHeight;

      this.start = start;
      this.end = start + this.visibleCount;
      this.transform = `translate3d(0,${transform}px,0)`;
    },
    initListHeight: function() {
      const tableBody = this.$refs["cnTableBody"];
      const firstTR = tableBody.querySelector("tr:first-child");
      const { height: containerHeight } = tableBody.getBoundingClientRect();
      const { height: trHeight } = firstTR.getBoundingClientRect();
      const phantom = this.$refs["phantom"];
      this.itemHeight = trHeight;
      this.visibleCount = Math.ceil(containerHeight / trHeight);
      this.end = this.start + this.visibleCount;
      phantom.style.height = this.dataSource * trHeight + "px";
    },
  },
  mounted() {
    this.initListHeight();
  },
};
</script>

<style>
.cn-table-body {
  position: relative;
  height: calc(100% - 40px);
  width: fit-content;
  overflow: auto;
  -webkit-overflow-scrolling: none;
  z-index: 0;
}
.cn-table-body table {
  will-change: transform;
  transition: all 0s linear;
  /* pointer-events: none; */
  transform: translate3d(0, 0, 0);
}
.sticky-col {
  position: sticky;
  position: -webkit-sticky;
  left: 0;
}
.cn-table-body-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  visibility: hidden;
}
</style>
