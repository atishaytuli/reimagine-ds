import { Card, CardContent } from "@/components/ui/card";

interface BenefitsProps {
  title: string;
  description: string;
  badge: string;
}

const benefitList: BenefitsProps[] = [
  {
    title: "Understand Your Needs",
    description:
      "We start by analyzing your business requirements, goals, and challenges to craft a tailored strategy that aligns with your vision.",
    badge: "Idea Generation",
  },
  {
    title: "Plan and Strategize",
    description:
      "Our team designs a comprehensive roadmap, detailing the timeline, deliverables, and resources needed for successful project execution.",
    badge: "Engineering",
  },
  {
    title: "Develop and Test",
    description:
      "Using cutting-edge technologies, we bring your project to life. Rigorous testing ensures the solution is functional, secure, and user-friendly.",
    badge: "Team Work and Iteration",
  },
  {
    title: "Deliver and Support",
    description:
      "We deliver the final product on time and provide ongoing support to ensure seamless integration and long-term success for your business.",
    badge: "Implementation",
  },
];

const videoFiles = ["one.mp4", "two.mp4", "three.mp4", "four.mp4"];

export const Method = () => {
  return (
    <section id="benefits" className="container md:p-10 lg:p-8 w-full">
      <div className="mx-auto">
        <h1 className="text-3xl font-semibold text-center text-balance">
          What Sets Us — <span className="font-semibold bg-blue-300 px-2 rounded"> Our Methodology
          </span>
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-12">
          {benefitList.map(({ title, description, badge }, index) => (
            <Card
              key={title}
              className="bg-white hover:shadow-md transition-all duration-300 rounded-2xl max-w-[350px] mx-auto flex flex-col"
            >

              <CardContent className="md:p-4 flex flex-col">
                {/* Badge */}
                <div className="bg-blue-500 font-semibold text-sm px-2 my-4 rounded-md w-fit text-white flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div> {/* Filled Circle */}
                  {badge}
                </div>


                {/* Video */}
                <video
                  src={videoFiles[index]}
                  autoPlay
                  loop
                  muted
                  className="w-full h-[180px] object-cover rounded-xl mt-4"
                />

                {/* Description */}
                <p className="text-muted-foreground text-sm mt-4">
                  <span className=" font-semibold text-green-600"> {title}  : </span>
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
