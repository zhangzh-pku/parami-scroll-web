<template>
    <div class="login-form">
      <h1 class="text-center">login</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">username:</label>
          <input id="username" type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">password:</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">login</button>
        </div>
      </form>
    </div>
  </template>
  
  <style>
  .login-form {
    background-color: var(--bs-orange);
    padding: 20px;
    border-radius: 8px;
    width: 900px;
    margin: 0 auto;
  }
  
  form {
    margin-top: 20px;
  }
  
  label {
    color: #fff;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: var( --bs-red);
    border-color:  var(--bs-red);
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: var(--bs-red);
    border-color: var(--bs-red);
    color: #fff;
    text-decoration: none;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  </style>
  