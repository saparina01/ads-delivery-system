<template>
   <template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

  {{a}}
  
</template>


<script>
import axios from 'axios'
export default {

  created:function(){//当组件被创建的时候会被自动创建
        axios.post("http://localhost:8080/hello?nickname=maruijia").then((response)=>{
         this.a=response.data
        })
  },
  data(){
       return{
          a:{}
       }
},
}
</script>