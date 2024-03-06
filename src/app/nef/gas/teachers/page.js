import { TeacherPage } from "@/app/components/pages/teachers";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { data } from "../_data";

export const metadata = {
  title: data.title,
};
export default function Teacher() {
  return (
    <>
      <Header { ...data } />
      <main>
        <TeacherPage { ...data } />
      </main>
      <Footer { ...data }  />
    </>
  );
}
