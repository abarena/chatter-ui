import client from "../constants/apollo-client"
import router from "../components/Routes";
import { authenticatedVar } from "../constants/authenticated";

export const onLogout = async () => {
  try {
    authenticatedVar(false);
    await router.navigate("/login");
    await client.resetStore();
  } catch (error) {
    console.error("Error during logout: ", error);
  }
};