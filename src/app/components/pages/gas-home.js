import Image from "next/image";
import Link from "next/link";
import { PiChartLineUpBold, PiPencilLineDuotone } from "react-icons/pi";

export const GasHomePage = ({ routeBase }) => {
  return (
    <main className="bg-gray-100">
      <div className="max-w-3xl grid gap-8 py-12 px-8 mx-auto prose lg:prose-lg">
        <div className="flex items-center gap-8 flex-wrap">
          <Image
            className="shrink-0"
            src="https://energysafekids.org/eversource/wp-content/uploads/sites/43/2023/09/Sitting-Right-699x1024.png"
            alt="Superhero pointing"
            width="205"
            height="300"
          />
          <div>
            <p>Hello! Let&apos;s learn about natural gas safety.</p>
            <p>Are you a student or a teacher?</p>
          </div>
        </div>
        <div className="flex justify-around gap-8 text-center">
          <Link href={`${routeBase}/students`} className="grid gap-4">
            <div className="w-24 h-24 bg-green-400 text-white rounded-full flex items-center justify-center">
              <PiPencilLineDuotone className="w-10 h-10 right-here" />
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
