import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Navigation />
        <CalendarBoard />
        <AddScheduleDialog />
        <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
    </Provider>
);


ReactDOM.render(<App />, document.getElementById("root"));
