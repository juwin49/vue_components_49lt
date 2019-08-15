<template>
 <div>
  <Sidebar msg="````````"></Sidebar >
  <Code msg="!!!!!!"></code>
  <iframe src="/browview"></iframe>
 </div>
</template>


<script>

import Sidebar from '@/views/Sidebar.vue'
import Code from '@/views/Code.vue'

export default {
  name: 'Ccontent',
  components: {
    Sidebar,Code
  }
}
</script>
