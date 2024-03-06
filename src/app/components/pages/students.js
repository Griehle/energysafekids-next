export const StudentPage = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl py-10">Student Materials</h1>
        <p className="text-base py-5 text-red-600">
          Hello Friend! Let&apos;s learn about natural gas safety.
        </p>
        <div className="py-24 flex items-center justify-evenly bg-gray-100 flex-col sm:flex-row px-16 text-white ">
          <div className="w-36 h-36 bg-green-800 rounded-full py-12 px-1">
            All About Natural Gas
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-12 px-1 ">
            Be Safe Around Natural Gas
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-12 px-1 ">
            Games & Activities
          </div>
          <div className="w-36 h-36 bg-green-800 rounded-full py-12 px-1 ">
            Your Energy Career
          </div>
        </div>
        <video autoPlay style={{ width: "500px", height: "500px" }}>
          <source
            src={
              "player.video.com/texttrack/14946066.vtt?token=655bf111_0x306344004fc7a7db99b7a60151427334f8a69ddc"
            }
          />
        </video>
      </div>
    </>
  );
};
