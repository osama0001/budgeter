<template>
  <div class="container-fluid py-4">
    <div class="col">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="card l-bg-cherry">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fad fa-coins"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Income</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">3,243</h2>
                </div>
                <div class="col-4 text-right">
                  <span>12.5% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1" data-height="8" style="height: 8px">
                <div
                  class="progress-bar l-bg-cyan"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="card l-bg-blue-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fad fa-money-check-edit-alt"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Expense</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">15.07k</h2>
                </div>
                <div class="col-4 text-right">
                  <span>9.23% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1" data-height="8" style="height: 8px">
                <div
                  class="progress-bar l-bg-green"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="card l-bg-green-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="far fa-badge-dollar"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Loan</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">578</h2>
                </div>
                <div class="col-4 text-right">
                  <span>10% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1" data-height="8" style="height: 8px">
                <div
                  class="progress-bar l-bg-orange"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="card l-bg-orange-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Remaining</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">$11.61k</h2>
                </div>
                <div class="col-4 text-right">
                  <span>2.5% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1" data-height="8" style="height: 8px">
                <div
                  class="progress-bar l-bg-cyan"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row text-center">
        <h4>Expenses</h4>
      </div>
      <table class="table table-striped custome__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Parent ID</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tr>
          <td>1</td>
          <td>News</td>
          <td>News Cate</td>
          <td class="text-center">
            <a class="btn btn-info btn-sm mx-1" href="#"
              ><span class="glyphicon glyphicon-edit"></span> Edit</a
            >
            <a href="#" class="btn btn-danger btn-sm mx-1"
              ><span class="glyphicon glyphicon-remove"></span> Del</a
            >
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Products</td>
          <td>Main Products</td>
          <td class="text-center">
            <a class="btn btn-info btn-sm mx-1" href="#"
              ><span class="glyphicon glyphicon-edit"></span> Edit</a
            >
            <a href="#" class="btn btn-danger btn-sm mx-1"
              ><span class="glyphicon glyphicon-remove"></span> Del</a
            >
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Blogs</td>
          <td>Parent Blogs</td>
          <td class="text-center">
            <a class="btn btn-info btn-sm mx-1" href="#"
              ><span class="glyphicon glyphicon-edit"></span> Edit</a
            >
            <a href="#" class="btn btn-danger btn-sm mx-1"
              ><span class="glyphicon glyphicon-remove"></span> Del</a
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
