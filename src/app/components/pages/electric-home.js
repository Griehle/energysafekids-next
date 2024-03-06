import Image from "next/image";
import Link from "next/link";
import { PiChartLineUpBold, PiPencilLineDuotone } from "react-icons/pi";

export const ElectricHome = ({ routeBase }) => {
  return (
    <main className="bg-gray-100">
      <div className="max-w-3xl grid lg:grid-cols-2 gap-8 py-6 px-8 mx-auto">
      <p className="font-bold text-lg"> Be an energy safe kid</p><br/>
     <p className="How are you being safe around energy?">How are you being safe around energy?
     </p>
      </div>
      <div className="flex justify-around  text-center max-w-3xl gap-8 pt-20 px-8 mx-auto prose lg:prose-lg">

        <div className="items-center gap-8 flex-wrap">
          <Image
            className="shrink-0"
            src="https://energysafekids.org/electric-test2/wp-content/uploads/sites/7/2018/06/Home_Speech-bubble-bg2-2.png"
            alt="Superhero pointing"
            width="877"
            height="439"
          />
        </div>
        <div className="flex justify-around gap-8 text-center mt-10">
          <Link href={`${routeBase}/students`} className="grid gap-4">
            <div className="w-24 h-24 bg-green-400 text-white rounded-full flex items-center justify-center">
              <PiPencilLineDuotone className="w-10 h-10" />
            </div>
            Students
          </Link>
          <Link href={`${routeBase}/teachers`} className="grid gap-4">
            <div className="w-24 h-24 bg-blue-400 text-white rounded-full flex items-center justify-center">
              <PiChartLineUpBold className="w-10 h-10" />
            </div>
            Teachers
          </Link>
        </div>
      </div>
    </main>
  );
};
