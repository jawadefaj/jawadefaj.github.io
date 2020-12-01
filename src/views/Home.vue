<template>
  <v-app>
    <v-main>
      <v-container>
        {{name}}

        <!-- Education Begins -->
        <v-card flat>
          <v-card-title>Education</v-card-title>
          <v-card-text>
            <v-list-item v-for="(degree, degreeIndex) in education" :key=degreeIndex>
              {{degree.name}}
            </v-list-item>
          </v-card-text>
        </v-card>
        <!-- Education Ends -->

        <!-- Publications Begins -->
        <v-card>
          <v-card-title>Publications</v-card-title>
          <v-card-text>
            <v-list-item v-for="(publication, publicationIndex) in publications" :key=publicationIndex>
              {{publication.name}}
            </v-list-item>
          </v-card-text>
        </v-card>
        <!-- Publications Ends -->

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import profile from '@/data'

export default {
  name: "Home",
  components: {
  },
  data: function(){
    return profile;
  }
};
</script>
