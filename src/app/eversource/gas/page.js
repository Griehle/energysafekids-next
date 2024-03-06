import { GasHomePage } from "@/app/components/pages/gas-home";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { data } from "./_data";

export const metadata = {
  title: data.title,
};

export default function Gas() {
  return (
    <>
      <Header {...data} />
      <main>
        <GasHomePage {...data} />
      </main>
      <Footer />
    </>
  );
}
