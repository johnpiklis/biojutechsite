import Link from 'next/link'
import { Hero, Container } from '../styles/styles'
import {ArrowRightIcon} from '@primer/octicons-react'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'


export default function Home() {
  return (
    <>
      <Hero>
        <Container>
          <h1>Professional <br /> Cable TV installation</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat blanditiis alias commodi molestiae, magni deserunt</p>
          <Link href="#">
            <a>
              <span>Learn More</span>
              <ArrowRightIcon/>
            </a>
          </Link>
        </Container>
      </Hero>
      <About/>
      <Services/>
      <Banner/>
    </>
  )
}


