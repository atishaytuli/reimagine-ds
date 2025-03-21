import Image from "next/image";

export const CommunitySection = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white px-4 sm:px-6 py-36">
      <div className="w-full max-w-6xl bg-[#F3EEE4] rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl">

        {/* Left Side - Text Content */}
        <div className="order-2  p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="font-[SR] text-2xl sm:text-3xl font-medium text-gray-900 leading-tight">
            Can&apos;t see the job for you? <br className="hidden sm:block" />
            Don&apos;t worry. We&apos;re always looking for talented people to join our team.
          </h1>
          <p className="mt-6 sm:mt-8 text-lg text-gray-700">
            Reach out to us and let&apos;s discuss how you can be a part of our journey.
          </p>
          <a
            href="mailto:careers@ds.com"
            className="mt-8 sm:mt-14 mx-auto lg:mx-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-lg font-medium border-2 border-black overflow-hidden group transition-all duration-300 hover:shadow-lg active:scale-95 w-fit"
          >
            <span className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gray-800">
              @
            </span>
            <span className="px-4 py-2 text-black transition-all duration-300">
              Email DS Careers
            </span>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="order-1 lg:order-2 relative h-[280px] sm:h-[280px] md:h-[300px] lg:h-full">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5622AQHyGWlX3ja9Og/feedshare-shrink_1280/B56ZREtcVpGsAk-/0/1736319551873?e=1744243200&v=beta&t=EKgHJyLhScuMnqadeGHAdtKuU6A6Y-Vd1_63J6VZYy8"
            alt="Team gathering"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
};