<template>
  <v-container
    :class="{
      'container pa-4 my-12': $vuetify.breakpoint.smAndDown,
      'container pa-10 my-12': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <!-- alert -->
    <v-row>
      <v-alert text type="success" border="left" width="100%" dismissible>
        Thank you, <strong>{{ name }}</strong> Your Profile was created
        successfully!
      </v-alert>
    </v-row>
    <!-- avatar -->
    <v-row class="justify-center">
      <v-avatar size="150px">
        <img src="https://image.flaticon.com/icons/png/512/265/265674.png" />
      </v-avatar>
    </v-row>
    <!-- name -->
    <v-row class="justify-center pb-5">
      <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
    </v-row>
    <!-- Input fields for user information -->
    <v-text-field
      label="First Name"
      outlined
      shaped
      prepend-inner-icon="mdi-account"
      :value="formData.firstName"
    ></v-text-field>
    <!-- Add similar v-text-field components for other user information fields -->

    <!-- Buttons for Cancel and Update -->
    <v-row>
      <v-col cols="12" md="6">
        <v-btn
          color="secondary"
          text
          block
          tile
          elevation="0"
          @click="backToPreviousPage()"
          class="pa-6 font-weight-bold"
        >
          Cancel
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          color="info"
          class="pa-6 font-weight-bold"
          block
          tile
          elevation="0"
          @click="updateInfo()"
        >
          Update
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserProfile", // Update the component name to a multi-word format

  computed: {
    formData: {
      get: function () {
        return this.$store.getters["authPageModule/getFormData"];
      },
    },
    name() {
      if (!this.formData.firstName || !this.formData.lastName)
        return "UserProfile";
      else return this.formData.firstName + " " + this.formData.lastName;
    },
  },

  methods: {
    backToPreviousPage() {
      this.$router.back();
    },
    updateInfo() {
      // Fake post request using axios
      this.axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(() => {
          this.$swal({
            title: "Updated",
            text: "Your profile was updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        })
        .catch((error) => {
          this.$swal({
            title: "Oops, Something went wrong!",
            text: error.message,
            icon: "warning",
          });
        });
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
