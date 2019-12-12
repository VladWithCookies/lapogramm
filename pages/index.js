import React from 'react';
import Head from 'next/head';
import { Grommet, grommet, Box, Grid } from "grommet";

// import PhotoEditor from './PhotoEditor';
import Header from '../components/Layouts/Header';


import '../stylesheets/applications.scss';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="main-container">
      <Grommet full theme={grommet}>
        <Grid
          rows={["xxsmall", "large", "xsmall"]}
          columns={["1/4", "3/4"]}
          areas={[
            ["header", "header"],
            ["main", "main"],
            ["footer", "footer"]
          ]}
          gap="small"
        >
          <Header />
          <Box background="light-2" gridArea="main">
            Main
          </Box>
          <Box background="dark-2" gridArea="footer">
            Footer
          </Box>
        </Grid>
      </Grommet>
    </div>
  </>
)

export default Home
