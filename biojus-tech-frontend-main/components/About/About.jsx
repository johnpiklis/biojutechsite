import Image from  'next/image'
import { Wrapper, Container, ContentWrapper, Content, ContentImg } from './styles';


import aboutImg from '../../public/images/about.jpg'

const aboutId = 'about-section'

const About = () => {
    return (
        <Wrapper id={aboutId}>
            <Container>
                <h3><span>We get it.</span> It&apos;s more than just <span>value for money.</span> <br /> It&apos;s about <span>quality service</span></h3>

                <ContentWrapper>
                    <Content>
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa aut illo qui sequi placeat sapiente perferendis nam molestias asperiores expedita esse corrupti voluptates soluta amet quas nostrum necessitatibus fugit, vero architecto tempore tenetur. Id ipsa laudantium expedita, repudiandae, mollitia ab molestias sunt ex nostrum itaque amet, eos libero veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias perspiciatis soluta accusantium ea dignissimos, adipisci iusto a? Necessitatibus, facere harum esse dolore architecto porro maxime, nam, nostrum ipsa excepturi ratione!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat libero dolorem, blanditiis eaque sequi, accusantium, minima vel molestiae iure voluptatem iste laborum! Libero iure laboriosam nemo suscipit odit.
                        </p>
                    </Content>
                    <ContentImg>
                        <Image src={aboutImg} alt="aboutImg" layout="fill" placeholder="blur" objectFit="cover"/>
                    </ContentImg>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
}
 
export default About;