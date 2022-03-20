<template>
  <div class="container">
    <div>
      <form action="">
        <div>
          <label for="">name product : </label>>
          <input v-model="Pname" type="text" />
        </div>
        <div>
          <label for="">Price product : </label>>
          <input v-model="price" type="number" />
        </div>
      </form>
      <button @click="addProduct()">add product</button>
    </div>
    <table>
      <tr>
        <th>product name</th>
        <th>price</th>
        <th>sell</th>
      </tr>
      <tr v-for="item in listData" :key="item.id">
        <td>{{ item.data.pname }}</td>
        <td>{{ item.data.price }}</td>
        <td><button @click="sell()">sell</button></td>
      </tr>
    </table>
    <router-view />
  </div>
</template>

<script>
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../plugins/config-db";

export default {
  mounted() {
    this.readData();
  },
  data: () => ({
      Pname:'',
      price:'',
    listData: [],
  }),
  methods: {
    add() {
      this.$router.push("/detial");
    },
    async addProduct() {
      try {
        const docRef = await addDoc(collection(db, "product"), {
        Pname:this.Pname,
        price:this.price,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "product"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.listData({ id: doc.id, data: doc.data() });
      });
    },
  },
};
</script>

<style></style>
