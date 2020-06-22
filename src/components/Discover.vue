<template>
  <div class="discover">
    <v-sheet min-height="700">
      <v-container grid-list-xs>
        <div
          class="text-center heading grey--text mb-8"
          style="margin-top: 50px;"
        >
          DISCOVER OUR COMPANY
        </div>
        <v-row justify="center" class="mb-8">
          <v-col cols="12" sm="3">
            <v-btn
              color="orange"
              outlined
              large
              block
              @click="(service = false), (mission = true)"
              ><span class="font-weight-bold">our mission</span></v-btn
            >
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn
              color="orange"
              outlined
              large
              block
              @click="(mission = false), (service = true)"
              ><span class="font-weight-bold">our services</span></v-btn
            >
          </v-col>
        </v-row>
        <v-row v-if="mission">
          <v-col cols="12" md="6">
            <v-sheet>
              <video width="100%" autoplay muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <v-row justify="center">
              <v-col cols="12" md="8">
                <div class="discover-text">
                  We’re available for 8 hours a day!
                </div>
                <div class="discover-text">
                  Contact to require a detailed analysis and assessment of your
                  plan.
                </div>
                <div class="mt-4 grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                  Cloud Computing
                </div>
                <div class="grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>IT
                  Support
                </div>
                <div class="grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>IT
                  Consultancy
                </div>
                <div class="grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>Web
                  Design and Development
                </div>
                <div class="grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon
                  >Mobile Application
                </div>
                <div class="grey--text">
                  <v-icon color="orange" class="mr-3">mdi-check-all</v-icon
                  >Cyber Security
                </div>
                <div class="orange--text mt-5">
                  Let's get started
                  <v-icon color="orange" small>mdi-arrow-right</v-icon>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-if="service" style="margin-bottom: 100px">
          <v-row>
            <v-col cols="12" md="4">
              <v-img src="https://i.imgur.com/L1OQ2Tt.jpg" contain width="100%">
              </v-img>
              <div class="headline font-weight-bold text-center mt-10 mb-3">
                Quality Assurance System
              </div>
              <div class="text-center">
                At Jogvek Group, we have a holistic and intergrated approach
                towards core modernization to experience technological
                evolution.
              </div>
              <div class="text-center">
                <v-btn text color="orange" class="mt-10 mb-10">
                  <span style="text-transform: capitalize"
                    >Discover now
                    <v-icon color="orange" small>mdi-arrow-right</v-icon></span
                  >
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-img src="https://i.imgur.com/vo5IUYH.jpg" contain width="100%">
              </v-img>
              <div class="headline font-weight-bold text-center  mt-10 mb-3">
                High Professional Staff
              </div>
              <div class="text-center">
                Our staff having obtained the official & formal training in IT
                technology and technical fields, our staff know best.
              </div>
              <div class="text-center">
                <v-btn text color="orange" class="mt-10 mb-10">
                  <span style="text-transform: capitalize"
                    >Discover now
                    <v-icon color="orange" small>mdi-arrow-right</v-icon></span
                  >
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                src="https://i.imgur.com/ltYWhta.jpg"
                contain=""
                width="100%"
              >
              </v-img>
              <div class="headline font-weight-bold text-center mt-10 mb-3">
                Info Security Management
              </div>
              <div class="text-center">
                Our technical staff have a flair for developing
                <strong>clean-coded-websites</strong> based on customers' needs
                global guidelines and trends
              </div>
              <div class="text-center">
                <v-btn text color="orange" class="mt-10 mb-10">
                  <span style="text-transform: capitalize"
                    >Discover now
                    <v-icon color="orange" small>mdi-arrow-right</v-icon></span
                  >
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mission: true,
      service: false
    };
  }
};
</script>

<style lang="css">
.discover-text {
  font-size: 18px;
  color: rgb(99, 96, 96);
}
</style>
