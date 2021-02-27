import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"
import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

export default () => (
  <>
    <Banner />
    <TextBlock
      id="about"
      title="There are a lot of choices finding the right shirt, coffee mug, iPhone case, Airpod pro case, etc."
      paragraph="Select from our catalog"
    >
      <Link to="perks" smooth={true} duration={500}>
        <Button label="Tell Me More" cta="Tell Me More!" />
      </Link>
    </TextBlock>
    <TextBlockImg
      id="perks"
      title="We have the right option for you"
      subtitle="Seek Imprints products are the perfect choice"
    >
      <div className="flex-container trio-block">
        <Perk
          img={perk1Img}
          alt="Fast Delivery"
          title="Speedy"
          content="Super-fast delivery"
        />
        <Perk
          img={perk2Img}
          alt="Great savings"
          title="Affordable"
          content="Several choices of product"
        />
        <Perk
          img={perk3Img}
          alt="Have Questions?"
          title="Friendly"
          content="We are here to help"
        />
      </div>
    </TextBlockImg>
    <Contact
      id="contact"
      title="Have an idea? Seek Imprints can work with you to make you something custom"
    />
  </>
)
