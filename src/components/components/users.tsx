import { Iusers } from "../../users";
import "../../styles.scss";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useUserContext } from "../../context/usersContext";
import UserConfig, { IintialValue } from "./userConfig";
import Modal from "./modal";
import { useState } from "react";

interface Iprops {
  userInfo: Iusers;
}

const Users: React.FC<Iprops> = (props) => {
  const { useDispatcher } = useUserContext();
  const [showModal, setshowModal] = useState(false);

  const openModal = () => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  const RemoveUser = () => {
    useDispatcher({
      type: "REMOVE_USER",
      payload: { id: props.userInfo.id },
    });
  };

  const UpdateUser = (user: IintialValue) => {
    useDispatcher({
      type: "UPDATE_USER",
      payload: {
        id: props.userInfo.id,
        name: user.name,
        imgUrl: user.imgUrl,
        likes: Number(user.likes),
        followers: Number(user.followers),
        following: Number(user.following),
      },
    });
  };

  return (
    <div className="users">
      <div className="img-head">
        <img src={props.userInfo.imgUrl} alt="" />
        <label htmlFor="">{props.userInfo.name}</label>
      </div>

      <div className="userInfo">
        <label htmlFor="">
          <BsHandThumbsUpFill /> likes: {props.userInfo.likes}
        </label>
        <label htmlFor="">
          <FaUserFriends /> Followers: {props.userInfo.followers}
        </label>
        <label htmlFor="">
          <FaUsers /> Following: {props.userInfo.following}
        </label>
      </div>
      <div className="update-remove">
        <RiDeleteBinLine onClick={RemoveUser} />
        <BiEditAlt onClick={openModal} />
        <Modal showModal={showModal}>
          <UserConfig
            closeModal={closeModal}
            userInfo={props.userInfo}
            submit={UpdateUser}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
