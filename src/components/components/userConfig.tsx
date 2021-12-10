import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormEvent, useEffect, useState } from "react";
import { Iusers } from "../../users";

export interface IintialValue {
  name: string;
  likes: string;
  followers: string;
  following: string;
  imgUrl: string;
}
interface Iprops {
  closeModal: () => void;
  submit: (user: IintialValue) => void;
  userInfo?: Iusers;
}

const UserConfig: React.FC<Iprops> = ({ closeModal, userInfo, submit }) => {
  const intialValue = {
    name: "",
    likes: "",
    followers: "",
    following: "",
    imgUrl: "",
  };
  const [initState, setinitState] = useState<IintialValue>(intialValue);

  useEffect(() => {
    if (userInfo) {
      setinitState({
        name: userInfo.name,
        likes: userInfo.likes.toString(),
        followers: userInfo.followers.toString(),
        following: userInfo.following.toString(),
        imgUrl: userInfo.imgUrl,
      });
    }
  }, [userInfo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinitState({
      ...initState,
      [name]: value,
    });
  };

  const OnSubmit = (e: FormEvent) => {
    e.preventDefault();
    closeModal();
    submit(initState);
  };

  return (
    <div className="content-add-user">
      <div className="add-user-header">
        <h2>Add User</h2>
        <AiOutlineCloseCircle onClick={closeModal} />
      </div>
      <form action="" onSubmit={OnSubmit} autoComplete="off">
        <div className="label-inputs">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={initState.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="label-inputs">
          <label htmlFor="">likes</label>
          <input
            type="text"
            name="likes"
            value={initState.likes}
            onChange={onChange}
            required
          />
        </div>
        <div className="label-inputs">
          <label htmlFor="">Followers</label>
          <input
            type="text"
            name="followers"
            value={initState.followers}
            onChange={onChange}
            required
          />
        </div>
        <div className="label-inputs">
          <label htmlFor="">Following</label>
          <input
            type="text"
            name="following"
            value={initState.following}
            onChange={onChange}
            required
          />
        </div>
        <div className="label-inputs">
          <label htmlFor="">Image Url</label>
          <input
            type="text"
            name="imgUrl"
            value={initState.imgUrl}
            onChange={onChange}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserConfig;
