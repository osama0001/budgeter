import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Incomes from "../views/Incomes.vue";
import Expenses from "../views/Expenses.vue";
import Loans from "../views/Loans.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/incomes",
    name: "Incomes",
    component: Incomes,
  },
  {
    path: "/expenses",
    name: "Expenses",
    component: Expenses,
  },
  {
    path: "/loans",
    name: "Loans",
    component: Loans,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
