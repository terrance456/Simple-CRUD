import "./styles.scss";

import { UsersProvider } from "../src/context/usersContext";
import View from "./components/components/view";

export default function App() {
  return (
    <div className="App">
      <UsersProvider>
        <View />
      </UsersProvider>
    </div>
  );
}
