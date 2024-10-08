<template>
    <div>
      <h1>List product</h1>
      <div class="search-container">
        <input v-model="inputValue" type="text" placeholder="Tìm kiếm sản phẩm" />
        <button @click="handleSearch">Tìm kiếm</button>
      </div>
      <div class="product-list">
        <div class="product-item" v-for="pro in listProduct" :key="pro.id" @click="handleDetail(pro.id)">
          <img class="product-image" :src="pro.image" :alt="pro.name">
          <div class="product-info">
            <p class="product-name">{{ pro.name }}</p>
            <p class="product-price">{{ pro.price.toLocaleString() }} VND</p>
            <button class="view-details">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
import { useRouter } from "vue-router";
  
  const inputValue = ref(""); 
  const products = [
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
  ];
  
  const listProduct = ref(products); 
    const router = useRouter();
  const handleSearch = () => {
    const keyword = inputValue.value.toLowerCase(); 
    const find = products.filter((product) =>
      product.name.toLowerCase().includes(keyword) 
    );
    listProduct.value = find; 
  };
  const handleDetail = (id) => {
    router.push(`listproduct/${id}`)
  }
  </script>
  
  <style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f7f8fa;
  color: #333;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
}
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

input {
  padding: 12px 20px;
  width: 350px;
  border: 2px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  transition: background-color 0.3s, box-shadow 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 30px;
}


.product-item {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.product-info {
  padding: 20px;
  text-align: center;
}

.product-name {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.product-price {
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
}

.view-details {
  padding: 12px;
  width: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.view-details:hover {
  background-color: #0056b3;
}

</style>
  