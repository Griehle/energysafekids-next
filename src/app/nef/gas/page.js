import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { GasHomePage } from "@/app/components/pages/gas-home";
import { data } from "./_data";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <Header {...data} />
      <main>
        <GasHomePage {...data} />
      </main>
      <Footer {...data} />
    </>
  );
}
