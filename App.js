import React from "react";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import store from "./src/store/Store";

import MainStack from "./src/navigation/MainStack";
import AddPhoto from "./src/screens/AddPhoto";
import Test from "./src/screens/Test";

function App() {
  return (
    <Provider store={store}>
      {/* <MainStack /> */}
      <AddPhoto />
    </Provider>
  );
}

export default App;
