import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm/ContactForm";
import { Wrapper, Container, Title, SubText, MainContent, MapContent, ContactDetailsWrapper, ContactDetails, ContactDetail, DetailIcon, Details, DetailTitle, Detail, CopyrightWrapper, SocailHandles, SocialHandle, Copyright } from "./styles";


import mapImage from '../../public/images/map.jpg'

const Footer = () => {


    const footerId = 'footer-section'
    const date = new Date().getFullYear();
    return (
        <Wrapper id={footerId}>
            <Container>
                <Title>Connect with us</Title>
                <SubText>You can reach out to us or drop by our store for any inquiries</SubText>
                <MainContent>
                    <ContactForm/>
                    <MapContent>
                        <Image src={mapImage} alt="map Image" layout="fill" placeholder="blur" objectFit="cover"/>
                    </MapContent>
                </MainContent>
                <ContactDetailsWrapper>
                    <ContactDetails>
                        <ContactDetail>
                            <DetailIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="127.692" height="113.504" viewBox="0 0 127.692 113.504"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M63.846,0A27.932,27.932,0,0,0,35.913,27.933c0,12.472,18.256,35.2,25.25,43.455a3.5,3.5,0,0,0,5.365,0c6.994-8.251,25.25-30.983,25.25-43.455A27.932,27.932,0,0,0,63.846,0Zm0,37.244a9.311,9.311,0,1,1,9.311-9.311A9.31,9.31,0,0,1,63.846,37.244ZM4.46,47.874A7.1,7.1,0,0,0,0,54.46v55.493a3.547,3.547,0,0,0,4.864,3.294L35.47,99.316V47.645a67.135,67.135,0,0,1-4.711-10.291ZM63.846,79.735a10.592,10.592,0,0,1-8.094-3.76c-4.358-5.143-8.994-11-13.188-17.008V99.314L85.128,113.5V58.969C80.934,64.975,76.3,70.834,71.94,75.977A10.6,10.6,0,0,1,63.846,79.735Zm58.982-44.007L92.222,49.658V113.5l31.01-12.4a7.093,7.093,0,0,0,4.46-6.586V39.022A3.547,3.547,0,0,0,122.829,35.727Z" fill="url(#a)"/></svg>
                            </DetailIcon>
                            <Details>
                                <DetailTitle>location</DetailTitle>
                                <Detail>24 upandan road,pitakwa</Detail>
                            </Details>
                        </ContactDetail>

                        <ContactDetail>
                            <DetailIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="107.39" height="95.456" viewBox="0 0 107.39 95.456"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M97.322,64H10.068C4.507,64,0,69.342,0,75.932v71.592c0,6.59,4.507,11.932,10.068,11.932H97.322c5.56,0,10.068-5.342,10.068-11.932V75.932C107.39,69.342,102.882,64,97.322,64Zm0,11.932V86.075c-4.7,4.539-12.2,11.6-28.229,26.472-3.532,3.293-10.529,11.2-15.4,11.112-4.868.093-11.867-7.82-15.4-11.112C22.271,97.674,14.771,90.615,10.068,86.075V75.932ZM10.068,147.524V101.386c4.806,4.537,11.622,10.9,22.01,20.544,4.584,4.277,12.613,13.718,21.617,13.661,8.96.057,16.886-9.247,21.615-13.659,10.388-9.641,17.206-16.009,22.012-20.546v46.137Z" transform="translate(0 -64)" fill="url(#a)"/></svg>
                            </DetailIcon>
                            <Details>
                                <DetailTitle>email</DetailTitle>
                                <Detail>test@test.com</Detail>
                            </Details>
                        </ContactDetail>

                        <ContactDetail>
                            <DetailIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="104.472" height="104.472" viewBox="0 0 104.472 104.472"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M81.384,4.049,64.228.09a3.985,3.985,0,0,0-4.536,2.293L51.773,20.859a3.949,3.949,0,0,0,1.138,4.619l10,8.182A61.137,61.137,0,0,1,33.677,62.891l-8.182-10a3.955,3.955,0,0,0-4.619-1.138L2.4,59.675A4.006,4.006,0,0,0,.09,64.228L4.049,81.384a3.958,3.958,0,0,0,3.86,3.068A76.534,76.534,0,0,0,84.452,7.909,3.954,3.954,0,0,0,81.384,4.049Z" transform="translate(104.459 23.288) rotate(106)" fill="url(#a)"/></svg>
                            </DetailIcon>
                            <Details>
                                <DetailTitle>Phone</DetailTitle>
                                <Detail>+234 123 456 678</Detail>
                            </Details>
                        </ContactDetail>
                    </ContactDetails>
                </ContactDetailsWrapper>
                <CopyrightWrapper>
                    <SocailHandles>
                        <SocialHandle>
                            <Link href="#">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="54.558" height="54.558" viewBox="0 0 54.558 54.558"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M54.558,35.008v48.53a3.007,3.007,0,0,1-3.008,3.008H37.643V65.429H44.73L45.79,57.2H37.63V51.936c0-2.387.658-4.007,4.08-4.007h4.36V40.561a58.615,58.615,0,0,0-6.357-.329c-6.284,0-10.595,3.836-10.595,10.887V57.2H22.006v8.232h7.112V86.558H3.008A3.014,3.014,0,0,1,0,83.55V35.008A3.014,3.014,0,0,1,3.008,32h48.53A3.017,3.017,0,0,1,54.558,35.008Z" transform="translate(0 -32)" fill="url(#a)"/></svg>
                                </a>
                            </Link>
                        </SocialHandle>
                        <SocialHandle>
                            <Link href="#">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="62.635" height="62.621" viewBox="0 0 62.635 62.621"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M31.249,47.08A16.055,16.055,0,1,0,47.3,63.135,16.03,16.03,0,0,0,31.249,47.08Zm0,26.493A10.438,10.438,0,1,1,41.687,63.135,10.457,10.457,0,0,1,31.249,73.573Zm20.457-27.15a3.745,3.745,0,1,1-3.745-3.745A3.736,3.736,0,0,1,51.706,46.423Zm10.634,3.8c-.238-5.016-1.383-9.46-5.058-13.121s-8.1-4.807-13.121-5.058c-5.17-.293-20.666-.293-25.836,0-5,.238-9.446,1.383-13.121,5.044S.4,45.194.145,50.21c-.293,5.17-.293,20.666,0,25.836.238,5.016,1.383,9.46,5.058,13.121s8.1,4.807,13.121,5.058c5.17.293,20.666.293,25.836,0,5.016-.238,9.46-1.383,13.121-5.058s4.807-8.1,5.058-13.121C62.633,70.876,62.633,55.394,62.34,50.224ZM55.66,81.594a10.568,10.568,0,0,1-5.953,5.953C45.586,89.181,35.8,88.8,31.249,88.8s-14.35.363-18.459-1.258a10.568,10.568,0,0,1-5.953-5.953C5.2,77.472,5.581,67.691,5.581,63.135s-.363-14.35,1.258-18.459a10.568,10.568,0,0,1,5.953-5.953c4.122-1.635,13.9-1.258,18.459-1.258S45.6,37.1,49.708,38.724a10.568,10.568,0,0,1,5.953,5.953c1.635,4.122,1.258,13.9,1.258,18.459S57.3,77.486,55.66,81.594Z" transform="translate(0.075 -31.825)" fill="url(#a)"/></svg>
                                </a>
                            </Link>
                        </SocialHandle>
                    </SocailHandles>
                    <Copyright>copyright &copy; {date}. All rights reserved</Copyright>
                </CopyrightWrapper>
            </Container>
        </Wrapper>
    );
}

export default Footer;

