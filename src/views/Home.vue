<template>
  <div class="home">
    home页面
    <el-button type="primary" :disabled='!compontendRules.home.add_button'>新增</el-button>
    <el-button type="info"    :disabled='!compontendRules.home.updata_button'>编辑</el-button>
    <el-button type="danger" :disabled='!compontendRules.home.del_button'>删除</el-button>
    <ul>
      {{compontendRules.home}}
      <template v-for='(item,index) in list'>
          <li :key='index' v-if='!item.promonList'>{{item.pastName}}</li>
          <li :key='index' v-else>
               {{item.promon.name}}
                <p v-for='(prom,index) in  item.promonList' :key='`${index}_prom`'>
                    {{prom.pastName}}
                </p>
          </li>
      </template>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: [
        { pastName: '正常的商品' },
        {
          promon: { name: '促销的商品' },
          promonList: [
            { pastName: '促销的赠品1' },
            { pastName: '促销的赠品2' }
          ]
        },
        { pastName: '正常的商品' },
        { pastName: '正常的商品' },
        { pastName: '正常的商品' },
        {
          promon: { name: '促销的商品' },
          promonList: [
            { pastName: '促销的赠品1' },
            { pastName: '促销的赠品2' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['compontendRules'])
  }
}
</script>
<style lang="scss" scoped>
    li{
      border-bottom: 1px solid red;
    }
    p{
      color: blue
    }
</style>
