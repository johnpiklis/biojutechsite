import { Wrapper, Container, SectionTitle, ServicesWrapper, ServiceCard, CardIcon, CardTitle, CardBody } from "./styles";
import liveTvIcon from "../../public/images/live_tv.png"

const Services = () => {

    const servicesId = 'services-section'
    return (
        <Wrapper id={servicesId}>
            <Container>
                <SectionTitle>What we do</SectionTitle>
                <ServicesWrapper>
                    <ServiceCard>
                        <CardIcon>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="96.842" height="84.95" viewBox="0 0 96.842 84.95"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><path d="M0,0H96.842V84.95H0Z" fill="none"/><path d="M35.488,34.38V66.76L65.665,50.57ZM87.22,18.19H54.543L68.726,4.874,65.665,2,48.421,18.19h-.129L31.048,2,28.073,4.874,42.213,18.19H9.622A8.4,8.4,0,0,0,1,26.285v48.57A8.4,8.4,0,0,0,9.622,82.95h77.6a8.4,8.4,0,0,0,8.622-8.095V26.285A8.4,8.4,0,0,0,87.22,18.19Zm0,56.665H9.622V26.285h77.6Z" transform="translate(0)" fill="url(#a)"/></svg>
                            </span>
                        </CardIcon>
                        <CardTitle>Cable Tv repair and installtion</CardTitle>
                        <CardBody>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque inventore ullam quos, quis optio dolores impedit officia est labore voluptatibus esse nesciunt rerum nemo, earum expedita perferendis accusantium suscipit aspernatur.
                        </CardBody>
                    </ServiceCard>

                    <ServiceCard>
                        <CardIcon>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="115.326" height="98.094" viewBox="0 0 115.326 98.094"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><g transform="translate(0 -9.567)"><path d="M114.539,51.313,44.261,10.74a8.8,8.8,0,0,0-12,3.214L24.174,27.967,18.788,37.3A8.8,8.8,0,0,0,22,49.3l24.1,13.91L42.352,69.6a5.654,5.654,0,0,1-4.858,2.783H23.426V61.657a1.577,1.577,0,0,0-1.577-1.577H13.29V58.046a6.991,6.991,0,0,0-6.983-6.983H1.577A1.576,1.576,0,0,0,0,52.64v53.444a1.576,1.576,0,0,0,1.577,1.577h4.73a6.991,6.991,0,0,0,6.983-6.983V95.67h8.559a1.577,1.577,0,0,0,1.577-1.577V86.344H37.494a19.672,19.672,0,0,0,16.9-9.681l3.8-6.473L71.4,77.816A8.74,8.74,0,0,0,75.779,79a8.83,8.83,0,0,0,2.289-.3,8.73,8.73,0,0,0,3.816-2.152,13.135,13.135,0,0,0,5.513,1.22,13.346,13.346,0,0,0,3.456-.458,13.167,13.167,0,0,0,7.182-4.865l3.229,1.864a1.576,1.576,0,0,0,2.154-.578l11.695-20.255a1.578,1.578,0,0,0-.574-2.156Zm-104.4,49.365a3.833,3.833,0,0,1-3.829,3.829H3.153V54.217H6.307a3.833,3.833,0,0,1,3.829,3.829Zm10.136-8.162H13.29V63.234h6.983ZM51.677,75.067a16.5,16.5,0,0,1-14.183,8.124H23.426V75.533H37.494a8.819,8.819,0,0,0,7.578-4.341l3.762-6.408,6.633,3.829Zm21.3.017-49.4-28.52a5.638,5.638,0,0,1-2.061-7.693l4.6-7.962L71.387,57.048l13.88,8.013-4.6,7.966-.006.01a5.563,5.563,0,0,1-.4.586v.006A5.637,5.637,0,0,1,72.981,75.085Zm17.062-.828a10.051,10.051,0,0,1-6.25-.329L88,66.636l7.292,4.209a10.051,10.051,0,0,1-5.254,3.411Zm11.438-3.478-10.2-5.887-3.077-1.776L53.4,43.018l-25.7-14.839L35,15.531a5.638,5.638,0,0,1,7.693-2.06L111.6,53.256Z" transform="translate(0)" fill="url(#a)"/><path d="M104.821,66.75a6.027,6.027,0,0,0,3.023.815,6.068,6.068,0,1,0-3.023-.815Zm.513-6.706a2.893,2.893,0,0,1,1.767-1.351,2.913,2.913,0,1,1-1.766,1.356Z" transform="translate(-10.078 -4.541)" fill="url(#a)"/><path d="M43.82,49.427,30.9,41.966A1.577,1.577,0,1,0,29.323,44.7l12.924,7.46a1.577,1.577,0,0,0,1.573-2.73Z" transform="translate(-2.825 -3.187)" fill="url(#a)"/></g></svg>

                            </span>
                        </CardIcon>
                        <CardTitle>CCTV installation</CardTitle>
                        <CardBody>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque inventore ullam quos, quis optio dolores impedit officia est labore voluptatibus esse nesciunt rerum nemo, earum expedita perferendis accusantium suscipit aspernatur.
                        </CardBody>
                    </ServiceCard>

                    <ServiceCard>
                        <CardIcon>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="113.83" height="97.227" viewBox="0 0 113.83 97.227"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs><g transform="translate(0 -37.34)"><g transform="translate(0 37.34)"><g transform="translate(0 0)"><path d="M113.663,66.728l-.076-.427c-.014-.066-.021-.132-.035-.2l-7.983-19.28V37.34H8.129v9.485L.278,66.1c-.017.076-.028.153-.042.227l-.073.4A13.727,13.727,0,0,0,0,68.846,13.544,13.544,0,0,0,7.114,80.773v53.794h99.6V80.773a13.551,13.551,0,0,0,7.114-11.927A13.725,13.725,0,0,0,113.663,66.728ZM108.3,65.8H90.878L88.784,51.716h13.784ZM12.874,42.082h87.953v4.743H12.874ZM86.79,70.539l.257,1.721-1.4,1.867a8.808,8.808,0,0,1-14.1,0L70.115,72.22l-.083-1.681ZM69.8,65.8l-.691-14.081H83.986l2.1,14.081Zm-4.516,4.742h0l.083,1.72L63.96,74.127a8.808,8.808,0,0,1-14.1,0l-1.438-1.919.083-1.669H65.283ZM48.748,65.8l.712-14.081h14.9L65.051,65.8Zm-20.978,0,2.07-14.081H44.715L44,65.8Zm15.986,4.742-.087,1.739-1.39,1.85a8.808,8.808,0,0,1-14.1,0l-1.369-1.822.261-1.766Zm-32.5-18.823H25.046L22.976,65.8H5.524ZM4.9,70.539H22.281l-.372,1.843L20.6,74.128A8.81,8.81,0,0,1,4.9,70.539Zm87.582,59.289H73.513v-16.6h2.373a2.369,2.369,0,1,0,0-4.738H73.513V91.88H92.487Zm9.484,0H97.228V87.142H68.771v42.686H11.856V82.291A13.552,13.552,0,0,0,24.39,76.976a13.552,13.552,0,0,0,21.684,0,13.549,13.549,0,0,0,21.68,0,13.552,13.552,0,0,0,21.684,0,13.552,13.552,0,0,0,12.533,5.315v47.537Zm-1.7-52.175a8.741,8.741,0,0,1-7.045-3.526L91.851,72.3l-.267-1.758h17.334A8.818,8.818,0,0,1,100.275,77.653Z" transform="translate(0 -37.34)" fill="url(#a)"/></g></g><g transform="translate(16.598 87.142)"><path d="M74.656,261.348v33.2h47.431v-33.2Zm42.686,28.457H79.4V266.086h37.941Z" transform="translate(-74.656 -261.348)" fill="url(#a)"/></g><g transform="translate(47.411 103.74)"><path d="M220.364,336a2.354,2.354,0,0,0-1.678.695l-4.742,4.745a2.369,2.369,0,0,0,3.352,3.349l4.742-4.738A2.373,2.373,0,0,0,220.364,336Z" transform="translate(-213.25 -336.004)" fill="url(#a)"/></g><g transform="translate(37.924 94.257)"><path d="M187.179,293.348a2.354,2.354,0,0,0-1.678.695l-14.229,14.225a2.37,2.37,0,1,0,3.352,3.352l14.229-14.225a2.37,2.37,0,0,0-1.674-4.047Z" transform="translate(-170.578 -293.348)" fill="url(#a)"/></g></g></svg>

                            </span>
                        </CardIcon>
                        <CardTitle>Electrical Appliance Sales</CardTitle>
                        <CardBody>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque inventore ullam quos, quis optio dolores impedit officia est labore voluptatibus esse nesciunt rerum nemo, earum expedita perferendis accusantium suscipit aspernatur.
                        </CardBody>
                    </ServiceCard>

                </ServicesWrapper>
            </Container>
        </Wrapper>
    );
}
 
export default Services;

