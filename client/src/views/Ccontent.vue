<template>
 <div class="content">
   <div class="sidebar">
       <Sidebar msg="````````"></Sidebar >
   </div>
   <div class="main">
     <div class="viewside" v-drag>
       <div>helo 2222222</div>
        <!-- <iframe src="/browview" frameborder="0"></iframe> -->
     </div>
     <div class="codeside" ref="codeside"  >
       <Code msg="!!!!!!"></code>
     </div>

   </div>

 </div>

</template>


<script>
import Sidebar from '@/views/Sidebar.vue'
import Code from '@/views/Code.vue'




export default {
  name: 'Ccontent',
  components: {
    Sidebar,Code
  },
  methods:{
    // drag:function() {
    //   let a = this.$refs.codeside;
    // }
  },
  //Vue钩子函数
  mounted(){
  },
  //Vue局部自定义指令
  directives:{
      drag:{
        inserted: function (el) {
          let a = el;
          a.addEventListener('mousemove', function(e) {
            this.style.cursor = 'auto'
            //Vue钩子函数函数中自定义的局部相当于body
            if (e.offsetX  < 10) {
              this.style.cursor = 'col-resize';
            }
            // if (e.offsetX  < this.offsetLeft+10) {
            //   this.style.cursor = 'col-resize';
            // }
          });
          let x = null;
          a.addEventListener('mousedown', function(e) {
            if (e.offsetX < 10) {
              x = 1;
            }
          });
          document.body.addEventListener('mouseup', function(e) {
            x = null
          });
          document.body.addEventListener('mousemove', function(e) {
            if (x != null) {
              a.style.width = (document.documentElement.clientWidth-e.clientX) + 'px';
            }
            // console.log(e.clientX)
          })

        }
      }
  }
}
</script>

<style>
.content{
  position:absolute;
  top:50px;
  right: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid #1d1d1d;
  overflow: hidden;
}
.sidebar{
  position: relative;
  width: 18%;
  height:100%;
  float: left;
  background: #2e2e2e;
  color: #cfcfcf;
}
.main{
  position:relative;
  width:82%;
  height: 100%;
  float: left;
  background: #1f1f1f;
}

.codeside{
  height: 100%;
  background: #1f1f1f;
  color: #bebebe;

}
.viewside{
  float: right;
  height: 100%;
  width:35%;
  min-width: 100px;
  max-width: 100%;
  background: #eee;
  color: #333;
  overflow: hidden;
}

</style>
