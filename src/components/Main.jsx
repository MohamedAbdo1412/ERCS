import Hero from './Hero'
import Search from "./Search";
import Carousel_Component from './Carousel'

export default function Main() {
  return (
    <div>
      <div className="Main Hero-Section">
        <Hero />
      </div>
      <div className="Main Search-Section">
        <Search />
      </div>
      <div className="Main Carousel-Section">
        <Carousel_Component/>
      </div>
    </div>

  )
}
