<template>
  <div class="404">
    <v-sheet height="700">
      <v-container grid-list-xs class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4">
            <v-img src="https://i.imgur.com/7soTLSG.png" contain></v-img>
          </v-col>
          <v-col cols="12">
            <div class="headline text-center">Something is wrong</div>
            <div class="body-1 text-center mt-3 font-weight-light">
              The page you are looking for was moved, removed, renamed or might
              never existed.
            </div>
            <div class="text-center mt-5">
              <v-btn color="primary" outlined to="/" large>
                <span style="text-transform: capitalize">go to home</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>
