import { createStore } from 'vuex'

export default createStore({
  state: {
    user_id:'325',
    name: 'Elfar',
    last_name: 'Morantes',
    products:[
      {
        id: 1,
        code:'435334656',
        product:'Funda de Papel',
        quantity:2,
        price:100,
        subtotal:200,
      },
      {
        id: 2,
        code:'345346446',
        product:'Bandeja de Cartón',
        quantity:2,
        price:200,
        subtotal:400,
      },
      {
        id: 3,
        code:'534534536',
        product:'Papel de Regalo',
        quantity:2,
        price:500,
        subtotal:1000,
      }],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
