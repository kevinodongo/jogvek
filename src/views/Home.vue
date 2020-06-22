<template>
  <div class="home">
    <!--Button Scroll Up-->
    <v-btn
      id="myBtn"
      onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()"
      x-small
      height="40"
      color="orange"
    >
      <v-icon class="white--text">mdi-chevron-up</v-icon>
    </v-btn>
    <Toolbar />
    <v-img
      height="700"
      src="https://i.imgur.com/e79U9Io.jpg"
      alt="home-logo"
      gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
    >
      <div class="contact d-none d-sm-flex">
        <v-container grid-list-xs>
          <v-card-actions class="pa-2">
            <v-spacer></v-spacer>
            <v-icon small class="ml-2">mdi-phone</v-icon>
            <div class="ml-2 caption font-weight-bold">+254 725 999 157</div>
            <v-icon small class="ml-2">mdi-email</v-icon>
            <div class="caption ml-2 font-weight-bold">jogvek@aol.com</div>
            <v-icon small class="ml-2 mr-2">mdi-clock-outline</v-icon>
            <div class="caption font-weight-bold">Mon-Fri 7.00 - 5.00</div>
          </v-card-actions>
        </v-container>
      </div>
      <v-divider></v-divider>
      <div style="margin-top: 150px;">
        <v-row justify="center">
          <v-col cols="11" md="8">
            <div class="display-3 font-weight-black text-center white--text">
              <span>ONE COMPANY</span>
            </div>
            <div
              class="display-3 font-weight-black mt-2 text-center white--text"
            >
              <span>INFINITE POTENTIAL</span>
            </div>
            <div class="headline text-center mt-3 white--text">
              Cloud Computing Solutions Designed For Your Business
            </div>
            <v-row justify="center" class="mt-10">
              <v-col cols="12" sm="3">
                <v-btn block color="white" large class="mr-3"
                  ><span class="orange--text" style="text-transform: capitalize"
                    >Free Consultation</span
                  ></v-btn
                >
              </v-col>
              <v-col cols="12" sm="3">
                <v-btn block dark color="orange" large
                  ><v-icon>mdi-menu-right</v-icon
                  ><span style="text-transform: capitalize"
                    >how we work</span
                  ></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-img>
    <Discover />
    <v-img
      src="https://i.imgur.com/jnVYHxH.png"
      contain=""
      alt="service-image"
      height="400"
      gradient="to top, rgba(128, 128, 128,.92), rgba(128, 128, 128,.92)"
    >
      <v-container grid-list-xs class="fill-height">
        <v-row align="center">
          <v-col cols="12" md="8">
            <div class="_text">
              We run all kinds of IT services that vow your
              <span class="orange--text">success</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-row>
              <v-col cols="6">
                <v-btn to="/contact" color="white" x-large block
                  ><v-icon small color="primary"
                    >mdi-comment-processing-outline</v-icon
                  >
                  <span
                    style="text-transform: capitalize"
                    class="caption primary--text"
                    >let's talk</span
                  ></v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn to="/about-cloud" color="orange" dark x-large block
                  ><v-icon class="mr-2" small>mdi-information-outline</v-icon>
                  <span style="text-transform: capitalize" class="caption"
                    >get info</span
                  ></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Discover from "../components/Discover";
import Toolbar from "../components/Toolbar";
export default {
  components: { Toolbar, Footer, Contact, Services, Discover },
  data() {
    return {
      loading: true,
      color: "orange--text",
      items: [
        {
          src: "https://i.imgur.com/n6CzWiq.jpg",
          color: "white--text"
        },
        {
          src: "https://i.imgur.com/LpKFb0g.jpg",
          color: "orange--text"
        }
      ],
      expand: false
    };
  },
  mounted() {
    this.scrollButton();
  },
  methods: {
    scrollButton() {
      var mybutton = document.getElementById("myBtn");
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {
        scrollFunction();
      };
      function scrollFunction() {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    }
  }
};
</script>

<style lang="css">
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: burlywood;
}
.line {
  border-bottom: 6px solid orange;
  width: 20%;
}
._text {
  font-size: 40px;
  font-weight: bolder;
  color: white;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
}
</style>
