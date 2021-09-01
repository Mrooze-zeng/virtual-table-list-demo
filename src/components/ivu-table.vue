<template>
  <div
    style="width: 500px; height: 200px; overflow: hidden; border: 1px solid #ccc; position: relative;"
    v-on="{ load: setTableShadow, resize: setTableShadow }"
  >
    <div
      style="height:100%; overflow-x: auto; position: relative; overflow-y: hidden;"
      ref="tableScroll"
      v-on:scroll="handleBodyScroll"
    >
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="width: 653px;"
        ref="scrollHead"
      >
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column, index) in columns2" :key="index">
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div
        style="overflow-y: auto; height: 177px; width: 800px; overflow-x: hidden;"
        ref="tableContent"
        v-on:scroll="handleBodyScrollTop"
      >
        <table cellspacing="0" cellpadding="0" border="0" style="width: 653px;">
          <colgroup>
            <col
              v-for="(column, index) in columns2"
              :key="index"
              :width="column.width"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, index) in data4" :key="index">
              <td v-for="(column, index) in columns2" :key="index">
                <span v-if="entry[column.key] != undefined">{{
                  entry[column.key]
                }}</span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      style="width: 100px; position: absolute; top: 0; left: 0;  overflow-x: hidden; background: #fff;"
      :class="{ 'table-fixed-left-scroll': hasLeft }"
      class="table-fixed-left"
    >
      <table cellspacing="0" cellpadding="0" border="0" style="width: 653px;">
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns2"
              :key="index"
              :class="{ tdHidden: column.fixed != 'left' }"
            >
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div style="height: 177px;overflow: hidden;" ref="fixedBody">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 653px;">
          <colgroup>
            <col
              v-for="(column, index) in columns2"
              :key="index"
              :width="column.width"
              :class="{ tdHidden: column.fixed != 'left' }"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, index) in data4" :key="index">
              <td v-for="(column, index) in columns2" :key="index">
                <span v-if="entry[column.key] != undefined">{{
                  entry[column.key]
                }}</span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div
      style="width: 100px; position: absolute; right: 0; top: 0; background: #fff;"
      :class="{ 'table-fixed-right-scroll': hasRight }"
      class="table-fixed-right"
    >
      <table cellspacing="0" cellpadding="0" border="0" style="width: 653px;">
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns2.concat().reverse()"
              :key="index"
              :class="{ tdHidden: column.fixed != 'right' }"
            >
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div style="height: 177px;overflow: hidden;" ref="fixedRightBody">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 653px;">
          <colgroup>
            <col
              v-for="(column, index) in columns2.concat().reverse()"
              :key="index"
              :width="column.width"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, index) in data4" :key="index">
              <td
                v-for="(column, index) in columns2.concat().reverse()"
                :key="index"
                :class="{ tdHidden: column.fixed != 'right' }"
              >
                <span v-if="entry[column.key] != undefined">{{
                  entry[column.key]
                }}</span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "app",
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
    return {
      hasLeft: false,
      hasRight: false,
      scrollValue: 0,
      columns2: this.columns,
      data4: this.dataSource,
    };
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    handleBodyScroll() {
      this.scrollValue = this.$refs.tableScroll.scrollLeft;
      this.hasRight = this.scrollValue - this.leftScroll < 0;
      this.hasLeft = this.scrollValue > 0;
    },
    handleBodyScrollTop(event) {
      this.$refs.fixedBody.scrollTop = event.target.scrollTop;
      this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
    },
    setTableShadow() {
      this.leftScroll =
        this.$refs.tableContent.clientWidth -
        this.$refs.tableScroll.clientWidth;
      this.handleBodyScroll();
    },
  },
  mounted() {
    window.onresize = this.setTableShadow;
    window.onload = this.setTableShadow;
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #fff;
}

table {
  table-layout: fixed;
}
table td {
  border-bottom: 1px solid #999;
}
.tdHidden {
  visibility: hidden;
}
.table-fixed-left {
  border-right: 0;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}
.table-fixed-right {
  border-left: 0;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}
.table-fixed-left-scroll {
  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);
}
.table-fixed-right-scroll {
  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);
}
</style>
