const express = require("express");
const budgeterRoute = express.Router();

// Model
let incomeModel = require("../models/income");
let expenseModel = require("../models/expense");

/* Income routes */
// Add
budgeterRoute.route("/add-income").post((req, res, next) => {
  incomeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// All
budgeterRoute.route("/").get((__, res, next) => {
  incomeModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Edit
budgeterRoute.route("/edit-income/:id").get((req, res, next) => {
  incomeModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Update
budgeterRoute.route("/update-income/:id").put((req, res, next) => {
  incomeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Income updated successfully!");
      }
    }
  );
});
// Delete
budgeterRoute.route("/delete-income/:id").delete((req, res, next) => {
  incomeModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

/* Expense routes */
// Add
budgeterRoute.route("/add-expense").post((req, res, next) => {
  expenseModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// All
budgeterRoute.route("/").get((__, res, next) => {
  expenseModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Edit
budgeterRoute.route("/edit-expense/:id").get((req, res, next) => {
  expenseModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Update
budgeterRoute.route("/update-expense/:id").put((req, res, next) => {
  expenseModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Expense updated successfully!");
      }
    }
  );
});
// Delete
budgeterRoute.route("/delete-expense/:id").delete((req, res, next) => {
  expenseModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = budgeterRoute;
