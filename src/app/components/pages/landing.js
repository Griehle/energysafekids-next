import Image from "next/image";
import Link from "next/link";

export const LandingPage = ({ logo, routeBase }) => {
  return (
    <main className="bg-white">
      <div className="max-w-3xl grid lg:grid-cols-2 gap-8 py-12 px-8 mx-auto">
        <div className="bg-white shadow grid justify-center py-8 px-4">
          <Link className="flex justify-center" href={`${routeBase}/home`}>
            {/*<Image
              className="max-w-[200px] px-8"
              src="https://energysafekids.org/electric/wp-content/uploads/sites/3/2020/02/Flame-NamePlate.png"
              width="904"
              height="397"
              title="Natural Gas Safety Site"
              alt="EnergySafeKids natural gas logo"
              objectFit="contain"
            />*/}
          </Link>
          <Link href={`${routeBase}/gas`}>
            <Image
              className="max-w-full"
              src="https://energysafekids.org/eversource/wp-content/uploads/sites/43/2020/03/Landing-e1696622070656.png"
              width="336"
              height="431"
              title="Natural Gas Safety Site"
              alt="Cartoon character in superhero pose"
            />
          </Link>
          <div className="flex justify-center">
            <Link
              className="py-3 px-8 bg-blue-600 text-white rounded-full"
              href={`${routeBase}/gas`}
            >
              Natural Gas Safety E-learning!
            </Link>
          </div>
        </div>
        <div className="bg-white shadow grid justify-center py-8 px-4">
          <Link className="flex justify-center" href={`${routeBase}/electric`}>
           {/* <Image
              className="max-w-[200px] px-8"
              src="https://energysafekids.org/electric/wp-content/uploads/sites/10/2020/03/Volt-NamePlate.jpg"
              width="768"
              height="312"
              title="Natural Gas Safety Site"
              alt="EnergySafeKids electric logo"
              objectFit="contain"
            />*/}
          </Link>
          <Link href={`${routeBase}/electric`}>
            <Image
              className="max-w-full"
              src="https://energysafekids.org/eversource/wp-content/uploads/sites/43/2023/10/Volter-poses-03-336.png"
              width="336"
              height="431"
              title="Electric Safety Site"
              alt="Another cartoon character in superhero pose"
            />
          </Link>
          <div className="flex justify-center">
            <Link
              className="py-3 px-8 bg-blue-600 text-white rounded-full"
              href={`${routeBase}/electric`}
            >
              Electric Safety E-learning!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
