import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Website Design & Development",
    description:
      "We build responsive, visually appealing websites that enhance user experience and drive business growth. Our solutions are scalable, ensuring long-term success.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    icon: "webDev.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-performance mobile apps tailored to your business needs. Our solutions ensure seamless user interaction across platforms.",
    technologies: ["Swift", "Kotlin", "React Native", "Flutter"],
    icon: "appDev.svg",
  },
  {
    title: "Technology Consultancy",
    description:
      "We provide expert guidance on digital transformation, helping businesses adopt the right technologies and optimize their operations effectively.",
    technologies: ["Cloud Computing", "DevOps", "AI/ML", "Cybersecurity"],
    icon: "consulting.svg",
  },
  {
    title: "UI/UX Development",
    description:
      "We design user-friendly and visually compelling interfaces that enhance engagement. Our approach is rooted in user research and modern design principles.",
    technologies: ["Figma", "Adobe XD", "Sketch", "CSS", "JavaScript"],
    icon: "UI-UX.svg",
  },
  {
    title: "Project Planning & Management",
    description:
      "We ensure smooth project execution with strategic planning, risk assessment, and efficient resource allocation, keeping your projects on track.",
    technologies: ["JIRA", "Trello", "Agile", "Scrum"],
    icon: "mangment.svg",
  },
  {
    title: "OFC Network & FTTx Planning",
    description:
      "We design and optimize fiber optic networks, ensuring efficient deployment for broadband, IPTV, and telecom infrastructures.",
    technologies: ["AutoCAD", "GIS", "FTTH", "Fiber Planner"],
    icon: "network.svg",
  },
  {
    title: "GIS-Based Optic Fiber Route Survey",
    description:
      "We conduct detailed surveys to assess route feasibility, right-of-way permissions, and network design for fiber deployment.",
    technologies: ["GIS", "QGIS", "ArcGIS", "AutoCAD"],
    icon: "gis.svg",
  },
  {
    title: "Post-Survey & As-Built Drawings",
    description:
      "We document final network layouts, capturing all modifications and specifications to ensure accurate records and compliance.",
    technologies: ["GIS", "AutoCAD", "MicroStation"],
    icon: "survey.svg",
  },
  {
    title: "Point of Interest (POI) Surveys",
    description:
      "We provide accurate POI surveys for industries like banking, retail, and real estate, delivering actionable geospatial insights.",
    technologies: ["GIS", "Data Collection Tools", "Remote Sensing"],
    icon: "poi.svg",
  },
  {
    title: "Design & CAD Drafting",
    description:
      "We offer high-precision 2D and 3D drafting services for electrical, mechanical, and structural projects, ensuring accuracy in designs.",
    technologies: ["AutoCAD", "Revit", "SolidWorks"],
    icon: "cad.svg",
  },
  {
    title: "Asset Mapping",
    description:
      "We assist in mapping critical assets for telecom and energy industries, optimizing infrastructure planning and operational efficiency.",
    technologies: ["GIS", "Geospatial Analysis", "Surveying Tools"],
    icon: "amapping.svg",
  },
  {
    title: "Cadastral & Topographical Mapping",
    description:
      "We provide accurate cadastral, topographical, and sewage mapping solutions to support urban and rural planning initiatives.",
    technologies: ["GIS", "Cartography", "Remote Sensing"],
    icon: "tmapping.svg",
  },
];


export const ServicesSection = () => {
  return (
    <section id="services" className="container py-12 md:py-16">
      <h2 className="text-3xl font-semibold text-center mb-12 md:mb-16 text-balance">
        What Services We <span className="font-semibold bg-green-400 px-2 rounded">— Offer.</span>
      </h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {serviceList.map((service, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col h-full border border-gray-200 rounded-xl bg-white transition-all relative"
          >
            <CardTitle className="text-2xl md:text-xl font-semibold text-gray-800">{service.title}</CardTitle>
  
            {/* Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center gap-4 mt-2">
              <CardDescription className="text-gray-600 leading-relaxed pt-1 md:pt-2 text-sm">
                {service.description}
              </CardDescription>
              <div className="flex justify-center pt-2 md:pt-0">
                <Image
                  src={`/${service.icon}`}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="object-contain w-32 h-32"
                />
              </div>
            </div>
  
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {service.technologies.map((tech, i) => (
                <Badge key={i} className="bg-green-500/30 px-2 py-1 text-black rounded-md text-xs font-semibold">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
  
};
