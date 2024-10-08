<template>
  <div class="settings-form">
    <h2>Cập nhật thông tin</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="fullName">Họ và tên</label>
        <input type="text" id="fullName" v-model="fullName" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <button type="submit" class="submit-button">Lưu</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const fullName = ref("");
const email = ref("");
const isChecked = ref(false);

const handleSubmit = () => {
  isChecked.value = true;
  alert("Thông tin đã được lưu!");
};

onBeforeRouteLeave((to, from, next) => {
  if (!isChecked.value) {
    const answer = window.confirm(
      "Bạn có chắc chắn muốn rời đi mà không lưu ?"
    );
    if (!answer) {
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }
});
</script>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.settings-form {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
