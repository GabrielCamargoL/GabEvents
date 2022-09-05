import { useState } from "react";
import { FeaturedShows } from "../components/featuredShows";
import { Header } from "../components/header";
import { ModalLogin } from "../components/modalLogin";
import { SearchCategory } from "../components/searchCategory";


export function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <>
      <Header onOpenLoginModal={handleOpenLoginModal} />
      <FeaturedShows />
      <SearchCategory />

      <ModalLogin
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </>
  )
}