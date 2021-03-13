const Registration = () => System.import("./components/registration/Registration.vue")
import Home from "./components/home/Home.vue";

export const routes = [
  { path: "/", name: "home", component: Home, title: "Home", menu: true },
  { path: "/registration", name: "registration", component: Registration, title: "Registration", menu: true},
  { path: "/registration/:id", name: "updateRegistration", component: Registration, title: "Registration", menu: false},
  { path: "*", component: Home, menu: false }
];
