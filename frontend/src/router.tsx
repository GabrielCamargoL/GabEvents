import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { ModalLogin } from "./components/modalLogin";
import { BuyTicket } from "./pages/buyTicket";
import { Home } from "./pages/home";

export function Router() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buyTicket/:id' element={<BuyTicket />} />
      </Routes>
      <Footer />

      <ModalLogin
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </>
  );
}