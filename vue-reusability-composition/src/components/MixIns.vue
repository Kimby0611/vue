<template>
  <div>
    <p>공통모듈</p>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/router/api";

export default {
  mixins: [api],
  data() {
    return {
      productList: [],
    };
  },
  async mounted() {
    this.productList = await this.$callAPI(
      "https://17fd0988-b9bd-446a-ab44-f1292fb425b2.mock.pstmn.io/productlist",
      "get"
    );
    console.log(this.productList);
  },
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 60%;
  margin: 0 auto;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
