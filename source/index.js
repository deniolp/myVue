Vue.component('product', {
  template: `
    <div class="product">

      <div class="product-image">
        <img v-bind:src="image" v-bind:alt="alt">
      </div>

      <div class="product-info">

        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>{{ sale }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div class="color-box" v-for="(variant, index) in variants"
           :key="variant.variantId"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateProduct(index)">
        </div>

        <button v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }">Add to cart
        </button>

        <div class="cart">
          <p>Cart {{ cart }}</p>
        </div>

      </div>

    </div>
  `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      alt: "Amazing socks",
      cart: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [{
          variantId: 2234,
          variantColor: "green",
          variantImage: "./img/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
          variantSale: true
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./img/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
          variantSale: false
        }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.variants[this.selectedVariant].variantSale) {
        return this.brand + " " + this.product + " " + "are on sale!";
      }
      return this.brand + " " + this.product + " " + "are not on sale!";
    }
  }
});

var app = new Vue({
  el: "#app"
});