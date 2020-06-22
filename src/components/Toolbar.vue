<template>
  <div class="toolbar">
    <v-app-bar app color="white">
      <v-container grid-list-xs>
        <v-card-actions>
          <div class="headline font-weight-bold d-none d-sm-flex black--text">
            JOGVEK GROUP LIMITED
          </div>
          <div class="title font-weight-bold d-flex d-sm-none black--text">
            JOGVEK GROUP LIMITED
          </div>
          <v-spacer></v-spacer>
          <v-btn text to="/" class="d-none d-md-flex black--text">home</v-btn>
          <v-btn text to="/about-cloud" class="d-none d-md-flex black--text"
            >about</v-btn
          >
          <v-btn text to="/products" class="d-none d-md-flex black--text"
            >products</v-btn
          >
          <v-btn text to="/contact" class="d-none d-md-flex black--text"
            >contact</v-btn
          >
          <v-btn
            class="d-flex d-md-none black--text"
            @click="expand = !expand"
            icon
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-card-actions>
      </v-container>
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
