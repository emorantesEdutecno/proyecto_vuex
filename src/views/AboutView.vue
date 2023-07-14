<template>
  <div class="About">
    <h1>This is an about page</h1>

    <ProductCount></ProductCount>
    <ProductList></ProductList>
    <ProductTotal></ProductTotal>
    <hr>
    <ProductList2></ProductList2>

  </div>
</template>

<script>
import ProductCount from '@/components/ProductCount.vue';
import ProductList from '@/components/ProductList.vue';
import ProductTotal from '@/components/ProductTotal.vue';
import ProductList2 from '@/components/ProductList2.vue';
export default{
  name:'About',
  components:{
    ProductCount,
    ProductList ,
    ProductTotal,
    ProductList2,
  },
  data:function(){
    return{

    }
  },
  methods:{},
  computed:{},
  watch:{},


}
</script>

<style scoped>
#About{
  background-color: chocolate;
}
</style>
