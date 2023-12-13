import axios from "axios";
import router from "@/router"; // Make sure to adjust the path based on your project structure

export const actions = {
  loginAndSaveToken(formData) {
    // Example: Using JSONPlaceholder as a fake API for testing
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        // Assuming the response contains a token property
        localStorage.setItem("auth_token", response.data.token);
        router.push("/profile");
      })
      .catch((error) => {
        // Handle errors appropriately, for example, redirecting to a login page
        console.error("Login failed:", error);
        router.push("/login");
      });
  },
};
