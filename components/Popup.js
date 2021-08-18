import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchUpdateUser } from "../redux/user/userActions";

function Popup({ showModal, setShowModal }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const updateUser = () => {
    const newUser = { name: name, id: user.id };
    dispatch(fetchUpdateUser(newUser));
    setName("");
    setShowModal(false);
  };

  return (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalHeader toggler={() => setShowModal(false)}>
        <p>{user && user.name}</p>
      </ModalHeader>
      <ModalBody>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="enter new name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="red"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark"
        >
          Close
        </Button>

        <Button color="green" onClick={updateUser} ripple="light">
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default Popup;
