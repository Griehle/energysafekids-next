import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LandingPage } from "./components/pages/landing";
import { data } from "./_data";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <LandingPage {...data} />
      <Footer {...data} />
    </>
  );
}
