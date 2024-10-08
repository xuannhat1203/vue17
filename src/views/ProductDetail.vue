<template>
    <div>
      <div class="product-list" v-if="!id">
        <div class="product-item" v-for="pro in products" :key="pro.id">
          <img class="product-image" :src="pro.image" :alt="pro.name">
          <div class="product-info">
            <p class="product-name">{{ pro.name }}</p>
            <p class="product-price">{{ pro.price.toLocaleString() }} VND</p>
          </div>
        </div>
      </div>
      <div class="product-detail" v-else-if="product">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name">
        <p>{{ product.price.toLocaleString() }} VND</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const id = route.params.id;
  
  const products = ref([
    {
      id: 1,
      name: "Điện thoại iPhone 15 Pro",
      price: 30000000,
      image: "https://huythanhluxury.vn/watermark/product/750x750x1/upload/product/15-pm-xanh-tintan-9479.jpg",
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 5G",
      price: 10600000,
      image: "https://www.pinoytechnoguide.com/wp-content/uploads/2024/01/OPPO-Reno11-5G.jpg",
    },
    {
      id: 3,
      name: "Điện thoại vivo V17s",
      price: 3300000,
      image: "https://webcazine.com/wp-content/uploads/2019/12/Vivo-V17.jpg",
    },
    {
      id: 4,
      name: "Điện thoại Nokia 8210 4G",
      price: 1300000,
      image: "https://hc.com.vn/i/ecommerce/media/GS.009643_FEATURE_132611.jpg",
    },
  ]);
  const product = computed(() => products.value.find((pro) => pro.id === +id));
  </script>
  <style>
  body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f9f9f9;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-item {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  text-align: center;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
}

.product-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-detail h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.product-detail img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-detail p {
  font-size: 18px;
  color: #333;
}

.product-detail .product-price {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-top: 10px;
}

  </style>
  