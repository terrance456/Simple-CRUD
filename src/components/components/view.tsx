import { useUserContext } from "../../context/usersContext";
import Users from "./users";
import AddUser from "./addUser";

import "../../styles.scss";

const View: React.FC = () => {
  const { state } = useUserContext();

  return (
    <div>
      <AddUser />
      <div className="view">
        {state.map((value) => (
          <Users userInfo={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default View;
