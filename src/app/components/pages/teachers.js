import Image from "next/image";
import Link from "next/link";

export const TeacherPage = ({ routeBase }) => {
  return (
    <main className="bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl py-10">Teacher Materials</h1>
        <h2 className="text-2xl pb-5">
          The teacher materials are brought to you by your local utility!
        </h2>
        <p className="text-base py-5 text-red-600">
          GREAT NEWS! You qualify for free resources!
        </p>
        <div className="py-24 flex items-center justify-evenly bg-gray-100 flex-col sm:flex-row px-16 text-white ">
          <div className="w-36 h-36 bg-green-800 rounded-full py-14">
            <Link href={`${routeBase}/teachers/stem`}>Plan your lessons</Link>
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-14 ">
            things
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-11 mb-3 ">
            Powerpoint Presentation
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-14 mb-3 ">
            Energy Careers
          </div>
        </div>
      </div>
    </main>
  );
};
