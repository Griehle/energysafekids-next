import { ElectricHome } from "@/app/components/pages/electric-home";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { data } from "./_data";

export const metadata = {
  title: data.title,
};
data.site = '/electric';
export default function Electric() {

  return (
    <>
      <Header {...data} />
      <main>
        <ElectricHome {...data} />
      </main>
      <Footer />
    </>
  );
}
