<template>
  <div class="toolbar">
    <v-app-bar app>
      <v-col class="d-none d-md-flex" cols="1"></v-col>
      <img
        class="d-flex d-sm-none"
        src="https://i.imgur.com/cYduz2v.png"
        alt="logo"
        height="65"
      />
      <img
        class="d-none d-sm-flex"
        src="https://i.imgur.com/cYduz2v.png"
        alt="logo"
        height="100"
      />
      <v-spacer></v-spacer>
      <v-btn text to="/" class="d-none d-md-flex">home</v-btn>
      <v-btn text to="/about-cloud" class="d-none d-md-flex">about</v-btn>
      <v-btn text to="/products" class="d-none d-md-flex">products</v-btn>
      <v-btn text to="/contact" class="d-none d-md-flex">contact</v-btn>
      <v-btn class="d-flex d-md-none" @click="expand = !expand" icon>
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
          <v-list-item to="/about" active-class="orange--text">
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
  data() {
    return {
      expand: false
    };
  }
};
</script>
