import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { data } from "../_data";
import { LandingPage } from "@/app/components/pages/landing";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <main>
        <LandingPage {...data} />
      </main>
      <Footer {...data} />
    </>
  );
}
