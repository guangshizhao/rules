<template>
  <div class="about">
        {{compontendRules.one}}
    <h1>This is an ONE page</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['compontendRules'])
  }
}
</script>
