'use strict';

var app = new Vue({ 
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        alt: 'Amazing socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage: './img/vmSocks-green-onWhite.jpg',
            variantQuantity: 10
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './img/vmSocks-blue-onWhite.jpg',
            variantQuantity: 0
          }
        ],
        cart: 0
    },
    methods: {
      addToCart() {
        this.cart++
      },
      updateProduct(index) {
        this.selectedVariant = index
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product;
      },
      image() {
        return this.variants[this.selectedVariant].variantImage;
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuantity;
      }
    }
});