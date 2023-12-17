import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { mainRouter } from "./router/mainRouter";
import { store } from "./Global/store";


const App = () => {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={mainRouter} />
    </Provider>
  </>
 
  );
};

export default App;
