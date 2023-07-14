<template>
    <div id="ProductList2">
        <h1>Product List Component2</h1>
        <h2>Nombre: {{ name }}, id: {{ user_id }}</h2>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
            </tr>
            <tr v-for="producto in products" :key="producto.id">
                <td>{{producto.code}}</td>
                <td>{{producto.product}}</td>
                <td>{{producto.quantity}}</td>
                <td>{{producto.price}}</td>
                <td>{{ producto.subtotal }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default{
    name:'ProductList2',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapState(['products','name','user_id']),
    },
    watch:{},
}
</script>

<style scoped>
#ProductList2{
    background-color:magenta;
}
</style>