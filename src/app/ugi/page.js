import { Footer } from "../components/footer";
import { data } from "./_data";
import { LandingPage } from "@/app/components/pages/landing";

export const metadata = {
  title: data.title,
};

export default function Home() {
  return (
    <>
      <main>
        <LandingPage {...data} />
        <p className="text-center my-5">
          {data.subParagraph.map((subParagraph, index) => (
            <span key={index}>{subParagraph.title}</span>
          ))}
        </p>
          <div className="flex flex-col items-center my-10">
            <button className=" text-center content-center bg-black text-amber-50 p-5 rounded text-4xl">
              {data.subParagraph.map((subParagraph, index) => (
                <sub key={index + "a"}>{subParagraph.text}</sub>
              ))}
            </button>
          </div>
      </main>
      <Footer />
    </>
  );
}
