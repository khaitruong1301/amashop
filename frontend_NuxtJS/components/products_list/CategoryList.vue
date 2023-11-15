<template>
  <div class="m-5 lg:px-8 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div v-for="category in categories" :key="category.id">
        <a  :href="`/search?keyword=${category.value}`" style="color: black;">
          <div style="background-color: #f4e9f2; "
            class="flex flex-col  pt-10 pb-8 shadow-xl  sm:mx-auto sm:max-w-lg sm:rounded-lg  text-center bg-center justify-center items-center font-bold text-xl space-y-5">
            <img class="w-24" :src="category.image" />
            <span>

              {{ category.name }}
            </span>
          </div>
        </a>
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
      categories: []
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
