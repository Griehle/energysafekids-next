import StemMatrix from "@/app/components/pages/stem-matrix.js";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { data } from "../../_data";

export const metadata = {
  title: data.title,
};
export default function Teacher() {
  return (
    <>
      <Header {...data} />
      <main>
        <StemMatrix />
      </main>
      <Footer {...data} />
    </>
  );
}
