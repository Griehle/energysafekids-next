import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { data } from "./_data";
import { ElectricHome } from "@/app/components/pages/electric-home";

export const metadata = {
  title: data.title,
};
export default function Home() {
  return (
    <>
      <Header {...data} />
      <main>
        <ElectricHome {...data} />
      </main>
      <Footer {...data} />
    </>
  );
}
