<template>
  <div class="services">
    <v-sheet color="#EFEBE9">
      <v-container grid-list-xs>
        <div class="text-center heading grey--text" style="margin-top: 100px;">
          OUR SERVICES
        </div>
        <div class="text-center service-title mt-5">
          For your very specific industry,
        </div>
        <div class="text-center service-title mb-10">
          we have
          <span class="primary--text">highly-tailored IT solutions.</span>
        </div>
        <v-row>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;">mdi-cloud-outline</v-icon>
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">Cloud Design</div>
                <div class="text-center">
                  We provide the most responsive and functional Cloud
                  Architecture for companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;">mdi-sitemap</v-icon>
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">IT Design</div>
                <div class="text-center">
                  We provide the most responsive and functional IT design for
                  companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;"
                    >mdi-briefcase-outline</v-icon
                  >
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">IT Management</div>
                <div class="text-center">
                  We provide the most responsive and functional IT design for
                  companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;">mdi-security-network</v-icon>
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">
                  Data Security & Monitoring
                </div>
                <div class="text-center">
                  We provide the most responsive and functional IT design for
                  companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;">mdi-semantic-web</v-icon>
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">Software Engineering</div>
                <div class="text-center">
                  We provide the most responsive and functional IT design for
                  companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="300">
              <v-sheet height="130" color="#ECEFF1">
                <v-row justify="center" class="fill-height" align="center">
                  <v-icon style="font-size: 70px;">mdi-cellphone</v-icon>
                </v-row>
              </v-sheet>
              <v-card-text>
                <div class="text-center headline">Mobile Applications</div>
                <div class="text-center">
                  We provide the most responsive and functional IT design for
                  companies and businesses worldwide.
                </div>
                <div class="text-center">
                  <v-btn text color="orange" class="mt-3 mb-3">
                    <span style="text-transform: capitalize"
                      >Discover now
                      <v-icon color="orange" small
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center service-text black--text">
          Challenges are just opportunities in disguise.<span
            style="text-decoration: underline"
            class="primary--text"
            >Take the challenge!</span
          >
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<style lang="css">
.service-title {
  font-size: 40px;
  font-weight: bold;
}
.service-text {
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 100px;
}
</style>
