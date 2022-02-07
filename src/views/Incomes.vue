<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mt-4">
        <div class="card custom__card">
          <h5 class="card-header">Add Monthly Income</h5>
          <div class="card-body">
            <form @submit.prevent="saveIncome">
              <div class="row">
                <div class="mb-3">
                  <label for="validationDefault01" class="form-label"
                    >Amount</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="validationDefault01"
                    min="0"
                    v-model="form.amount"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="validationDefault02" class="form-label"
                    >Source</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    v-model="form.source"
                    required
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-4">
        <div class="card l-bg-cherry custom__card">
          <div class="card-statistic-3 p-3">
            <div class="card-icon card-icon-large">
              <i class="fas fa-sack-dollar"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0 text-center">Monthly Income</h5>
            </div>
            <div
              class="row align-items-center justify-content-center mb-2 d-flex"
            >
              <div class="col-8">
                <h2 class="d-flex justify-content-center mb-0">
                  {{ totalIncome }}Rs
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card card l-bg-green-dark custom__card">
          <div class="card-statistic-3 p-3">
            <div class="card-icon card-icon-large">
              <i class="far fa-sack-dollar"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0 text-center">Remaining Income</h5>
            </div>
            <div
              class="row align-items-center justify-content-center mb-2 d-flex"
            >
              <div class="col-8">
                <h2
                  class="d-flex justify-content-center align-items-center mb-0"
                >
                  578 Rs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 mt-4">
        <table class="table table-striped custome__table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Amount</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="income in incomes" :key="income._id">
              <td>{{ income.source }}</td>
              <td>{{ income.amount }}</td>
              <td class="text-center">
                <button
                  @click.prevent="deleteIncome(income._id)"
                  class="btn btn-danger btn-sm mx-1"
                >
                  <span class="glyphicon glyphicon-remove"></span> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import useBudgeter from "./components/useBudgeter";
export default {
  setup() {
    const form = reactive({
      amount: "",
      source: null,
    });

    const {
      incomes,
      totalIncome,
      incomeSum,
      getIncomes,
      storeIncome,
      destroyIncome,
    } = useBudgeter();

    onMounted(getIncomes);
    onMounted(incomeSum);

    const saveIncome = async () => {
      await storeIncome({ ...form });
      getIncomes();
      incomeSum();
      form.amount = "";
      form.source = null;
    };

    const deleteIncome = async (id) => {
      await destroyIncome(id);
      await getIncomes();
      incomeSum();
    };

    return {
      form,
      incomes,
      totalIncome,
      saveIncome,
      deleteIncome,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom__card {
  border: 1px solid #ccc;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}
</style>
