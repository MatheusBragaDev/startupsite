'use client'
import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "./dashboard/page";
import BackgroundImage from "@/components/BackgroundImage";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">

    
    <main className={styles.main}>
      <DrawerAppBar/>
      <Container maxWidth="md">
       <BackgroundImage/>
        <Box className={styles.box} sx={{justifyContent:'center'}}> 
          <Typography className={styles.center} component="h1" variant="h3">
            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina “Maybe put a quote that one of you like as a way to show visitors who you are”
          </Typography>
        </Box>
      </Container>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    </Container>
    
  );
}
