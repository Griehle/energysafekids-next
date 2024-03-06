import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { StudentPage } from "@/app/components/pages/students";
import { data } from "../_data";

export const metadata = {
  title: data.title,
};
export default function Student() {
    return (
        <>
            <Header {...data} />
            <StudentPage {...data} />
      <Footer />
    </>
  );
}
