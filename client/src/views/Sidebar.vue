<template>
<div id="demo">
  <div class="sidenav"></div>
  <div class="sidedir">
    <!-- hello sidebar {{msg}} -->
    <!-- the demo root element -->
    <ul >
      <treeItem
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
      ></treeItem>
    </ul>
  </div>
</div>
</template>

<script>
import treeItem from '@/components/treeItem.vue'

// demo data
var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'Sidebar',
  components: {
    treeItem
  },
  // props: {
  //   msg: String
  // },
  el: '#demo',
  // data: {
  //   treeData: treeData
  // },
  data() {
    return {
     treeData: treeData
    }
  },
  methods: {
    makeFolder: function (item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function (item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style>
.sidenav{
  position: absolute;
  display: block;
  left:0;
  height: 100%;
  width: 50px;
}
.sidedir{
  margin-left: 50px;
}

.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

</style>
