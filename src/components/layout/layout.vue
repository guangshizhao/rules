<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
     <!-- <el-menu
      class="el-menu-vertical-demo"
      > -->
      <!-- <template v-for="(item, index) in routes">
          <template v-if='item.children.length > 1'>
            <el-submenu :key='`${index}chi`'  :index='String(index)'>
              <template slot="title">
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${childIndex}_item`">
                  <router-link tag="span" :to='{name:childItem.name}'>
                  {{childItem.meta.title}}
                  </router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :key='index'>
              <router-link  slot="title" :to='{name:item.name}' tag='div'>
                {{item.meta.title}}
              </router-link>
            </el-menu-item>
          </template>
      </template> -->
    <!-- </el-menu> -->
     <el-menu>
      <template v-for="(item, index) in routesList">
           <el-submenu :key='`${index}chi`' :index='String(index)'>
              <template slot="title">
                <span>{{item.meta ? item.meta.title :''}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${childIndex}_item`">
                  <router-link tag="span" :to='{name:childItem.name}'>
                    {{childItem.meta ? childItem.meta.title :''}}
                  </router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          <!-- <template v-if='item.children.length > 1'>
            <el-submenu :key='`${index}chi`'  :index='String(index)'>
              <template slot="title">
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${childIndex}_item`">
                  <router-link tag="span" :to='{name:childItem.name}'>
                  {{childItem.meta.title}}
                  </router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template> -->
          <!-- <template v-else>
            <el-menu-item :key='index'>
              <router-link  slot="title" :to='{name:item.name}' tag='div'>
                {{item.meta.title}}
              </router-link>
            </el-menu-item>
          </template> -->
      </template>
      </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    <el-button @click='back'>回登录页</el-button>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import { setToken } from '../../lib/util'
export default {
  data () {
    return {
    }
  },
  computed: {
    routesList () {
      return this.$store.state.routers.filter(item => {
        return item.path !== '*' && item.name !== 'login'
      })
    }
  },
  methods: {
    back () {
      this.$router.push({ name: 'login' })
      setToken('')
      this.$store.state.hasGetRules = false
    }
  },
  created () {
  }
}
</script>
<style>

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
