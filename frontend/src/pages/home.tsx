import { FeaturedShows } from "../components/featuredShows";
import { Header } from "../components/header";
import { SearchCategory } from "../components/searchCategory";

export function Home() {
  return (
    <>
      <Header />
      <FeaturedShows />
      <SearchCategory />
    </>
  )
}