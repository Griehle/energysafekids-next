import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { data } from "../_data";
import {LandingPage} from "@/app/components/pages/landing";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <Header {...data} />
      <main>
        <LandingPage {...data} />
      </main>
      <Footer { ...data }  />
    </>
  );
}
