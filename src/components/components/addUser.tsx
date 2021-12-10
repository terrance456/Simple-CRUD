import { useState } from "react";
import { useUserContext } from "../../context/usersContext";
import Modal from "./modal";
import UserConfig, { IintialValue } from "./userConfig";

const AddUser: React.FC = () => {
  const [open, setopen] = useState(false);
  const { useDispatcher } = useUserContext();

  const openModal = () => {
    setopen(true);
  };

  const closeModal = () => {
    setopen(false);
  };

  const AddUsers = (user: IintialValue) => {
    useDispatcher({
      type: "ADD_USER",
      payload: {
        id: Date.now(),
        name: user.name,
        imgUrl: user.imgUrl,
        likes: Number(user.likes),
        followers: Number(user.followers),
        following: Number(user.following),
      },
    });
  };

  return (
    <div>
      <button onClick={openModal} className="add-btn">
        Add user
      </button>
      <Modal showModal={open}>
        <UserConfig closeModal={closeModal} submit={AddUsers} />
      </Modal>
    </div>
  );
};

export default AddUser;
