<template>
  <div class="m-5 lg:px-8 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="category in categories" :key="category.id">
        <div class="flex flex-col bg-pink-50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 text-center bg-center">
          <img class="w-24" :src="category.image "/>
          {{ category.name }}
        </div>
      </div>
    </div>  
    
  </div>
</template>

<script>
import Products from '../Products'
export default {
name: 'ProductsList',

  components: {
    Products
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    products: {
      type: Array,
      default: () => []
    }
  },

  data() {
    console.log(this.products)

    return {
      id: '',
      noProductLabel: 'No product found',
      categories:[]
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await this.$api.product.getCategory();
        console.log(response.data.category)
        this.categories = response.data.category; // Giả sử response.data là mảng các category
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
