<template>
  <div
    class="cn-table-body"
    @scroll="handleBodyScrollTop"
    ref="cnTableBody"
    :style="{ height: TableBodyheight + 'px' }"
  >
    <div
      class="cn-table-body-phantom"
      ref="phantom"
      :style="{ 'min-height': phantomHeight }"
    ></div>
    <table :style="{ transform: transform }">
      <colgroup>
        <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
      </colgroup>
      <tbody>
        <tr v-for="(row, i) in visibleData" :key="i">
          <td v-for="col in columns" :key="col.key">
            <slot
              v-if="col.body"
              name="body"
              v-bind:data="row"
              v-bind:column="col"
            ></slot>
            <span v-else>
              {{ row[col.key] }}
            </span>
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
    height: {
      type: Number,
      default: 0,
    },
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
      end: 2,
      itemHeight: 0,
      transform: "",
      visibleCount: 2,
      TableBodyheight: 0,
    };
  },
  computed: {
    visibleData: function() {
      return this.dataSource.slice(
        Math.max(this.start, 0),
        Math.min(this.end, this.dataSource.length),
      );
    },
    phantomHeight: function() {
      return this.dataSource.length * this.itemHeight + "px";
    },
  },
  watch: {
    height: function(v) {
      this.setUpComp(v);
    },
  },
  methods: {
    handleBodyScrollTop: _.throttle(
      function(event) {
        const scrollTop = event.target.scrollTop;

        this.itemHeight = Math.min(
          this.itemHeight,
          this.getTrHeight(event.target),
        ); //修正高度

        this.onScroll(scrollTop, event.target, this.itemHeight);

        this.setUpPositionWithBuf(scrollTop, this.visibleCount);
        // this.setUpPositionNormal(scrollTop);
      },
      0,
      { trailing: true },
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
    getTrHeight: function(target) {
      const firstTR = target.querySelector("tr:first-child");
      const { height } = firstTR.getBoundingClientRect();
      return height;
    },
    setUpComp: function(v) {
      const dom = this.$refs["cnTableBody"];
      this.itemHeight = this.getTrHeight(dom);
      this.visibleCount = Math.ceil(v / this.itemHeight);
      this.end = this.start + this.visibleCount * 2;
      if (this.visibleCount > this.dataSource.length) {
        dom.scrollTop = v;
        this.TableBodyheight = Math.ceil(
          this.dataSource.length * this.itemHeight,
        );
      } else {
        this.TableBodyheight = v;
        dom.scrollTop = 0;
      }
      console.log(v, this.visibleCount > this.dataSource.length);
    },
  },
  mounted() {},
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
:not(:root):fullscreen .cn-table-body-phantom {
  height: calc(100% + 10px);
}
.cn-table-body-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  visibility: hidden;
}
</style>
