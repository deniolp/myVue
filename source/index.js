'use strict';

var app = new Vue({ 
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/vmSocks-green-onWhite.jpg',
        alt: 'Amazing socks',
        link: 'https://www.yandex.ru/search/?text=socks%20&lr=43&rnd=92501',
        inventory: 8,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green'    
          },
          {
            variantId: 2235,
            variantColor: 'blue'
          }
        ],
        cart: 0
    },
    methods: {
      addToCart() {
        this.cart++
      }
    }
});