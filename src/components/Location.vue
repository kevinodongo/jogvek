<template>
  <div class="location">
    <Toolbar />
    <v-sheet color="#ECEFF1">
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="https://i.imgur.com/jnVYHxH.png"
              contain
              gradient="to top, rgba(236, 239, 241,.70), rgba(236, 239, 241,.70)"
            >
              <v-row class="fill-height" align="center">
                <div class="headline font-weight-light ml-3">CONTACT US</div>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://i.imgur.com/9DoksmE.png"
              contain
              height="300"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="location">
      <v-container grid-list-xs>
        <v-row class="mt-10">
          <v-col cols="12" md="4">
            <div class="headline">CALL US</div>
            <div class="mt-7 font-weight-light" style="text-align: justify">
              Welcome to Jogevk Group Limited, Reach out to us and discover how
              working with us will help you realize your full potential, reduce
              operation costs and enhance your business outlook.
            </div>
            <div class="mt-5 font-weight-light">
              <v-icon class="mr-3">mdi-home</v-icon> Address:29-00517,
              Nairobi,Kenya
            </div>
            <div class="mt-3 font-weight-light">
              <v-icon class="mr-3">mdi-phone</v-icon> Phone: (+254) 725 999157
            </div>
            <div class="mt-3 font-weight-light">
              <v-icon class="mr-3">mdi-email</v-icon> E-mail: jogevk@aol.com
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="headline">GET IN TOUCH WITH US</div>
            <v-row class="mt-6" no-gutters>
              <v-col cols="12">
                <div class="font-weight-bold caption mb-2">Name *</div>
                <v-text-field
                  background-color="#F5F5F5"
                  name="name"
                  single-line
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="font-weight-bold caption mb-2">Email *</div>
                <v-text-field
                  background-color="#F5F5F5"
                  name="email"
                  single-line
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="font-weight-bold caption mb-2">Phone Number *</div>
                <v-text-field
                  background-color="#F5F5F5"
                  name="phone"
                  single-line
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="font-weight-bold caption mb-2">Subject *</div>
                <v-textarea
                  background-color="#F5F5F5"
                  single-line
                  outlined
                  name="input-7-4"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn color="orange" dark large block>send message</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798736310864!2d36.796672114701074!3d-1.2953341990552243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10be1cd0bc33%3A0x6733974af7e19a5c!2sNyaku%20House!5e0!3m2!1sen!2ske!4v1592738862420!5m2!1sen!2ske"
      width="100%"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
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
      //
    };
  }
};
</script>

<style lang="css">
.home {
  color: rgb(197, 217, 231);
}
</style>
