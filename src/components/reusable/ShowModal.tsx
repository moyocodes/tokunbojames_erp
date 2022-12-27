import { useState } from "react";
import Modal from "react-modal";
import "../../custom.d.ts";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

type Props = {
  children: React.ReactNode;
  text: string;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShowModal({ children, setClose, text }: Props) {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    setClose(true); // normal
  }

  return (
    <>
      <div className="show__modal">
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={false} style={customStyles} contentLabel="Example Modal">
          <div className="bg-transparent grid text-sm rounded-t-lg" id="modal">
            <div className="bg-white text-black py-3 px-4 flex justify-between items-center border-b-2">
              <div className="font-bold">{text}</div>

              <span className="cursor-pointer" onClick={closeModal}>
                <i className="fa fa-times" aria-hidden></i>&nbsp;Close
              </span>
            </div>
            <div className="set_h overflow-y-scroll my-auto">{children}</div>
          </div>
        </Modal>
      </div>

      <style jsx>
        {`
          #modal {
            width: 300px;
            position: relative;
            z-index: 999999999999;
          }

          @media screen and (min-width: 400px) {
            #modal {
              width: 360px;
              margin: 0 auto;
            }
          }

          @media screen and (min-width: 560px) {
            #modal {
              width: 420px;
              margin: 0 auto;
            }
          }

          @media screen and (min-width: 640px) {
            #modal {
              width: 500px;
              margin: 0 auto;
            }
          }

          .set_h {
            max-height: calc(100vh - 200px);
          }

          .show__modal {
            position: relative;
            z-index: 999999999999;
          }
        `}
      </style>
    </>
  );
}
