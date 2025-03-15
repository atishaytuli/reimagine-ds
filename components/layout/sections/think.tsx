import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Proven Industry Expertise",
    description:
      "With 17+ years of experience, we deliver innovative software and telecom solutions to keep your business ahead."
  },
  {
    icon: "LineChart",
    title: "Tailored Solutions for Your Business",
    description:
      "Every business is unique — so are our solutions. From enterprise software to telecom integration and mobile apps, we tailor solutions to fit your needs.",
  },
  {
    icon: "Wallet",
    title: "Scalable & Cost-Effective Services",
    description:
      "Our cost-effective services grow with your business, ensuring high quality and long-term value.",
  },
  {
    icon: "Sparkle",
    title: "A Commitment to Excellence",
    description:
      "Beyond delivery, we offer transparent communication, on-time results, and dedicated support.",
  },
];

export const BenefitsSection = () => {
  return (
<section id="benefits" className="container md:py-16 w-full">
  <div className="mx-auto">
    <h1 className="text-3xl font-semibold text-center text-pretty">
      You Think it — We Build it, We <span className="font-semibold bg-orange-300 px-2 rounded">Prove</span> it.
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-12">
      
      {/* Left side container */}
      <div className="border bg-white rounded-2xl py-8 px-6 shadow-sm flex flex-col">
        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm border border-orange-100 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="orange">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 16V6H12.5V16C12.5 21.5142 8.01417 26 2.5 26V22.6667C6.17833 22.6667 9.16667 19.675 9.16667 16H2.5ZM19.168 16V6H29.168V16C29.168 21.5142 24.6821 26 19.168 26V22.6667C22.8463 22.6667 25.8346 19.675 25.8346 16H19.168Z" fill="#F97316" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-[#131426] leading-tight">
          Custom Software & Telecom Solutions to Drive Your Success.
        </h2>
        <div className="flex-1 bg-orange-300/20 p-4 mt-4 rounded-xl flex flex-col">
          <p className="text-md text-gray-700 leading-relaxed flex-1">
            At <span className="text-orange-500 font-semibold text-lg">Designing Solutions</span>, we don&apos;t just build software — we create tailored digital ecosystems that empower businesses to thrive. From cutting-edge applications to seamless telecom integrations, we deliver solutions that drive efficiency, growth, and competitive advantage.
          </p>
        </div>
      </div>

      {/* Right side container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {benefitList.map(({ icon, title, description }) => (
          <Card
            key={title}
            className="bg-white hover:shadow-md transition-all duration-300 rounded-2xl h-full"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-lg text-[#131426] font-semibold">{title}</CardTitle>
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="hsl(var(--primary))"
                  className="text-primary flex-shrink-0 mt-1"
                />
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  </div>
</section>

  );
};
