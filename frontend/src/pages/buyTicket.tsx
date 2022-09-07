import { useState } from "react";
import { DetailsTicket } from "../components/detailsTicket";
import { GeneralHeader } from "../components/headers/generalHeader";
import { ModalLogin } from "../components/modalLogin";


export function BuyTicket() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <>
      <GeneralHeader onOpenLoginModal={handleOpenLoginModal} />

      <DetailsTicket />

      <ModalLogin
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </>
  )
}