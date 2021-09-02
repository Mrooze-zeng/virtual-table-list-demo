<template>
  <div id="app">
    <cn-table
      :dataSource="dataSource"
      :columns="columns"
      @boundaryTop="handleBoundaryTop"
      @boundaryBottom="handleBoundaryBottom"
    >
      <template v-slot:header="slotProps">
        <component
          :is="slotProps.column.slot.header"
          v-bind="slotProps"
        ></component>
      </template>
      <template v-slot:body="slotProps">
        <component
          :is="slotProps.column.slot.body"
          v-bind="slotProps"
        ></component>
      </template>
    </cn-table>
  </div>
</template>

<script>
import _ from "underscore";

import CnTable from "./components/cn-table.vue";
import AC from "./components/inner-components/a.vue";
import AB from "./components/inner-components/b.vue";

const defautlData = [
  {
    id: 0,
    province: "Connecticut",
    city: "South Anastacio",
    name: "Oswaldo Considine",
    zip: "62352",
    age: 689,
    address: "49967 Lloyd Ridge",
  },
  {
    id: 1,
    province: "Ohio",
    city: "Lake Sydnee",
    name: "Kieran Thompson",
    zip: "03930",
    age: 234,
    address: "674 Stanton Locks",
  },
  {
    id: 2,
    province: "Montana",
    city: "South Alexzanderfort",
    name: "Lynn Willms",
    zip: "32615-1991",
    age: 595,
    address: "40564 Alysha Mill",
  },
  {
    id: 3,
    province: "Virginia",
    city: "Lynnmouth",
    name: "Gwendolyn Mohr Jr.",
    zip: "15517",
    age: 593,
    address: "573 Hegmann Gardens",
  },
  {
    id: 4,
    province: "Nevada",
    city: "Smithamtown",
    name: "Kobe Tillman",
    zip: "49700",
    age: 942,
    address: "85408 Gustave Key",
  },
  {
    id: 5,
    province: "Louisiana",
    city: "Durganberg",
    name: "Cletus Rempel",
    zip: "41996",
    age: 647,
    address: "009 Wintheiser Extensions",
  },
  {
    id: 6,
    province: "Pennsylvania",
    city: "South Mattfurt",
    name: "Stephany Erdman",
    zip: "72236",
    age: 266,
    address: "2123 Rolfson Cliff",
  },
  {
    id: 7,
    province: "Vermont",
    city: "South Nicolas",
    name: "Thad Stark",
    zip: "53975-4801",
    age: 920,
    address: "102 Katelyn Lodge",
  },
  {
    id: 8,
    province: "Oklahoma",
    city: "West Syble",
    name: "Shayne Block",
    zip: "77066",
    age: 199,
    address: "61061 Terry Orchard",
  },
  {
    id: 9,
    province: "Tennessee",
    city: "Austenborough",
    name: "Giovanna Yost",
    zip: "55889-8053",
    age: 605,
    address: "0964 Reynolds Junction",
  },
  {
    id: 10,
    province: "Hawaii",
    city: "Timmyborough",
    name: "Norene Will II",
    zip: "63035-1193",
    age: 74,
    address: "812 Zachariah Extensions",
  },
  {
    id: 11,
    province: "Wisconsin",
    city: "North Theresa",
    name: "Ila Ruecker",
    zip: "92413-8438",
    age: 935,
    address: "84530 Corkery Plains",
  },
  {
    id: 12,
    province: "Michigan",
    city: "East Akeemstad",
    name: "Gina Schaden I",
    zip: "36035",
    age: 393,
    address: "24068 Karley Path",
  },
  {
    id: 13,
    province: "Illinois",
    city: "Velmahaven",
    name: "Raoul Bailey",
    zip: "84101-0326",
    age: 871,
    address: "02314 Tracy Tunnel",
  },
];

export default {
  name: "App",
  components: {
    CnTable,
    AC,
    AB,
  },
  data() {
    return {
      dataSource: [],
      columns: [
        {
          title: "No.",
          key: "id",
          width: 100,
          fixed: "left",
          slot: {
            header: "AC",
            body: "AB",
          },
        },
        {
          title: "姓名",
          key: "name",
          fixed: "left",
          width: 100,
        },
        {
          title: "年龄",
          key: "age",
          width: 100,
        },
        {
          title: "省份",
          key: "province",
          width: 100,
        },
        {
          title: "市区",
          key: "city",
          width: 200,
        },
        {
          title: "地址",
          key: "address",
          width: 200,
        },
        {
          title: "邮编",
          key: "zip",
          width: 100,
        },
        {
          title: "操作",
          key: "action",
          width: 100,
          slot: {
            header: "AC",
            body: "AB",
          },
          action: function() {
            console.log("action");
          },
        },
      ],
    };
  },
  methods: {
    handleBoundaryTop: function() {
      console.log("reach top");
    },
    handleBoundaryBottom: function() {
      console.log("reach bottom");
      const dataSource = this.dataSource;
      this.dataSource = [...dataSource, this.createDataSource()];
    },
    createDataSource: function(size = 100) {
      let dataSource = [];
      for (let i = 0; i < size; i++) {
        let item = defautlData[Math.floor(Math.random() * defautlData.length)];
        dataSource.push({
          ...item,
          ...{
            id: i,
          },
        });
      }
      return dataSource;
    },
  },
  created() {
    this.dataSource = this.createDataSource();
  },
};
</script>

<style>
#app {
  margin-top: 100px;
}
</style>
