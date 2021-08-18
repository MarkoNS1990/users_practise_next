import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useSelector } from "react-redux";

function Popup({ showModal, setShowModal }) {
  const user = useSelector((state) => state.user.user);
  return (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalHeader toggler={() => setShowModal(false)}>
        <p>{user && user.name}</p>
        <hr />
        <p>username: {user.username}</p>
      </ModalHeader>
      <ModalBody>
        <input type="text" placeholder="enter new name" />
      </ModalBody>
      <ModalFooter>
        <Button
          color="red"
          buttonType="link"
          onClick={(e) => setShowModalCode(false)}
          ripple="dark"
        >
          Close
        </Button>

        <Button
          color="green"
          onClick={(e) => setShowModalCode(false)}
          ripple="light"
        >
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default Popup;
