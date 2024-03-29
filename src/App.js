import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Импорт вашего store из Redux
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return(
        <Provider store={store}>
            <div className="container">
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
              <div className="col-sm">
                <Budget />
              </div>
              <div className="col-sm">
                <Remaining />
              </div>
              <div className="col-sm">
                <ExpenseTotal />
              </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
              <div className="col-sm">
                <ExpenseList />
              </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="row mt-3">
              <div className="col-sm">
                <AddExpenseForm />
              </div>
            </div>
          </div>
        </Provider>
  );
};

export default App;
