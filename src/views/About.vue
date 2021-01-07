<template>
  <div class="about">
    <Toolbar :companyLogo="companyLogo" />
    <v-sheet height="30"></v-sheet>
    <v-container grid-list-xs>
      <v-row class="about">
        <v-col cols="12" md="3">
          <div class="ml-4 grey--text">CONTENTS</div>
          <v-list>
            <v-list-item to="/about-cloud" active-class="orange--text">
              <v-list-item-title>Cloud Computing</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/serverless-technology"
              active-class="orange--text"
            >
              <v-list-item-title>Serverless Artichecture</v-list-item-title>
            </v-list-item>
            <v-list-item to="/security" active-class="orange--text">
              <v-list-item-title>Cloud Security</v-list-item-title>
            </v-list-item>
            <v-list-item to="/disaster" active-class="orange--text">
              <v-list-item-title>Disaster Recovery</v-list-item-title>
            </v-list-item>
            <v-list-item to="/digital-marketing" active-class="orange--text">
              <v-list-item-title>Digital Marketing</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="9">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
export default {
  components: { Toolbar, Footer },
  data() {
    return {
      companyLogo: ""
    };
  },
  mounted() {
    this.companyLogo =
      "https://res.cloudinary.com/dk5ch7wqm/image/upload/v1610042479/IMG-20200910-WA0020_ppnudi.jpg";
  }
};
</script>
