<template>
  <div class="toolbar">
    <v-app-bar app color="white">
      <v-col class="d-none d-md-flex" cols="1"></v-col>
      <img :src="companyLogo" alt="logo" height="50" />
      <div class="ml-2 font-weight-bold black--text">
        JOGEVK GROUP LIMITED
      </div>
      <v-spacer></v-spacer>
      <v-btn
        text
        to="/"
        tile
        class="d-none d-md-flex black--text"
        active-class="orange--text"
      >
        home
      </v-btn>
      <v-btn
        tile
        active-class="orange--text"
        text
        to="/about-cloud"
        class="d-none d-md-flex black--text"
        >about</v-btn
      >
      <v-btn
        tile
        active-class="orange--text"
        text
        to="/products"
        class="d-none d-md-flex black--text"
        >products</v-btn
      >
      <v-btn
        tile
        active-class="orange--text"
        text
        to="/contact"
        class="d-none d-md-flex black--text"
        >contact</v-btn
      >
      <v-btn
        class="d-flex d-md-none black--text"
        @click="expand = !expand"
        icon
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-col class="d-none d-md-flex" cols="1"></v-col>
    </v-app-bar>
    <v-expand-transition>
      <v-card v-show="expand" width="100%" class="mx-auto">
        <v-list>
          <v-list-item to="/" active-class="orange--text">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about-cloud" active-class="orange--text">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/products" active-class="orange--text">
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact" active-class="orange--text">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["companyLogo"],
  data() {
    return {
      expand: false
    };
  }
};
</script>
