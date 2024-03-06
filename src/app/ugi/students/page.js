import { StudentPage } from "@/app/components/pages/students";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { data } from "../_data";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <Header {...data} />
      <main>
        <StudentPage />
      </main>
      <Footer />
    </>
  );
}
