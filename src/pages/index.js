import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home page">
            <p>lemao</p>
            <StaticImage
                alt="bunny girl"
                src="https://static.wikia.nocookie.net/aobuta/images/2/21/Mai_Sakurajima_Anime_1.png/revision/latest/scale-to-width-down/1000?cb=20181126000124"
            ></StaticImage>
        </Layout>
    );
};

export default IndexPage;
