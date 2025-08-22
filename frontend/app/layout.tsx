import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./layout.module.css";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "De Groene Deler",
  description: "Voorkom voedselverspilling en help de medemens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={styles.body}>
        <NavBar />
        <div className={styles.main}>
          <Container>{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
