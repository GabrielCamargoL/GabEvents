import { useState } from "react";
import { Contacts } from "../components/contacts";
import { FeaturedShows } from "../components/featuredShows";
import { HomeHeader } from "../components/headers/headerHome";
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
      <HomeHeader onOpenLoginModal={handleOpenLoginModal} />
      <FeaturedShows onOpenLoginModal={handleOpenLoginModal} />
      <SearchCategory />
      <Contacts />

      <ModalLogin
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </>
  )
}