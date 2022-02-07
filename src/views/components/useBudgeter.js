import { ref } from "vue";
import axios from "axios";

export default function useBudgeter() {
  const incomes = ref([]);
  const expenses = ref([]);
  const errors = ref("");
  let totalIncome = ref(null);

  const incomeSum = async () => {
    let apiURL = "http://localhost:4000/api";
    let response = await axios.get(apiURL);
    let count = response.data.length;
    totalIncome.value = 0;
    for (let i = 0; i < count; i++) {
      totalIncome.value += response.data[i].amount;
    }
  };

  const getIncomes = async () => {
    let apiURL = "http://localhost:4000/api";
    let response = await axios.get(apiURL);
    incomes.value = response.data;
  };

  const storeIncome = async (data) => {
    let apiURL = "http://localhost:4000/api/add-income";
    errors.value = "";
    try {
      await axios.post(apiURL, data).then(() => {});
    } catch (e) {
      console.log(`${e}`);
    }
  };

  const destroyIncome = async (id) => {
    let apiURL = "http://localhost:4000/api//delete-income/" + id;
    await axios.delete(apiURL);
  };

  return {
    incomes,
    expenses,
    totalIncome,
    incomeSum,
    storeIncome,
    getIncomes,
    destroyIncome,
  };
}
