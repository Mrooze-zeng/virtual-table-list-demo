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
    <table :style="{ transform: transform }" ref="tablebox">
      <colgroup>
        <col v-for="(col, i) in columns" :key="i" :width="col.width || ''" />
      </colgroup>
      <tbody>
        <tr v-for="(row, i) in visibleData" :key="i" :id="row.id">
          <td v-for="col in columns" :key="col.key">
            <div class="td-container">
              <slot
                v-if="col.body"
                name="body"
                v-bind:data="row"
                v-bind:column="col"
              ></slot>
              <span v-else>
                {{ row[col.key] }}
              </span>
            </div>
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
      scrollTopCache: [],
      scrollTop: 0,
    };
  },
  computed: {
    visibleData: function() {
      if (this.visibleCount > this.dataSource.length) {
        const dom = this.$refs["cnTableBody"];
        dom.scrollTop = 0;
      }
      return this.dataSource.slice(
        Math.max(this.start, 0),
        Math.min(this.end, this.dataSource.length),
      );
    },
    phantomHeight: function() {
      return Math.ceil((this.dataSource.length / 2) * this.itemHeight) + "px";
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

        const tablebox = this.$refs["tablebox"];
        const { top, bottom } = event.target.getBoundingClientRect();
        const {
          bottom: tableBottom,
          top: tableTop,
        } = tablebox.getBoundingClientRect();

        this.$emit(
          "onScroll",
          scrollTop,
          this.itemHeight,
          tableBottom - bottom === 0,
          tableTop - top === 0,
        );

        this.setUpPositionForUncertainRowHeight(scrollTop, event.target);

        // this.setUpPositionWithBuf(scrollTop, this.visibleCount);
        // this.setUpPositionNormal(scrollTop);
      },
      0,
      { leading: true },
    ),
    setUpPositionForUncertainRowHeight: function(scrollTop, container) {
      const first = container.querySelector("tr:first-child");
      const last = container.querySelector("tr:last-child");
      const {
        top: containerTop,
        bottom: containerBottom,
      } = container.getBoundingClientRect();
      const { height, bottom: firstBottom } = first.getBoundingClientRect();
      const { top: lastTop } = last.getBoundingClientRect();

      if (this.scrollTop < scrollTop) {
        if (containerTop >= firstBottom) {
          this.addCache({
            scrollTop,
            id: first.id,
            start: this.start,
            height,
            transform: scrollTop,
          });
          this.setTransform(this.scrollTopCache, scrollTop);
        }
      } else if (this.scrollTop > scrollTop) {
        if (containerBottom <= lastTop) {
          this.setTransform(this.scrollTopCache, scrollTop, -1);
        }
      }
      this.scrollTop = scrollTop;
    },
    setTransform: function(cache = [], scrollTop, extr = 1) {
      const item = cache.find((i) => i.scrollTop >= scrollTop);
      if (item) {
        let transform = 0;
        let start = Math.max(item.start + extr, 0);
        cache.slice(0, start).forEach((c) => {
          transform += c.height;
        });
        this.transform = `translate3d(0,${transform}px,0)`;
        this.start = start;
        this.end = this.start + this.visibleCount;
      }
    },
    addCache: function(cache = {}) {
      if (this.scrollTopCache.findIndex((i) => i.id === cache.id) < 0) {
        this.scrollTopCache.push(cache);
      }
    },
    setUpPositionWithBuf: function(scrollTop, bufSize) {
      let start = Math.floor(scrollTop / this.itemHeight);
      let transform = 0;
      if (start >= bufSize) {
        this.start = start - bufSize;
        transform = this.itemHeight * (start - bufSize);
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
      let heights = [60];
      const trs = target.querySelectorAll("tr:nth-child(-n+5)") || [];
      trs.forEach((tr) => {
        const { height } = tr.getBoundingClientRect();
        heights.push(height);
      });
      return Math.min(...heights);
    },
    setUpComp: function(v) {
      const dom = this.$refs["cnTableBody"];
      this.itemHeight = this.getTrHeight(dom);
      this.visibleCount = Math.max(Math.ceil(v / this.itemHeight), 10);
      this.end = this.start + this.visibleCount;
      this.TableBodyheight = v;
      dom.scrollTop = 0;
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
.cn-table-body-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: calc(100% + 1px);
  visibility: hidden;
}
/* .td-container {
  box-sizing: border-box;
  padding: 8px 16px;
  width: 100%;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
</style>
