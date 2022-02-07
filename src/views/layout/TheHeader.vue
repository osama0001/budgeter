<template>
  <nav class="navbar navbar-expand navbar-light bg-light py-0">
    <div class="container-fluid">
      <router-link to="dashboard" class="navbar-brand" href="#">
        Budgeter
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li class="nav-item">
            <router-link
              to="dashboard"
              class="nav-link fs-6 fw-bold"
              aria-current="page"
              >Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="incomes"
              class="nav-link fs-6 fw-bold"
              aria-current="page"
              >Income
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="expenses"
              class="nav-link fs-6 fw-bold"
              aria-current="page"
              >Expense
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="loans"
              class="nav-link fs-6 fw-bold"
              aria-current="page"
              >Loan
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
