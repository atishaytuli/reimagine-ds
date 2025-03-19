import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full py-12 bg-zinc-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2 mb-8 md:mb-0">
            <Link href="#" className="flex font-bold items-center">
              <Image className="w-7 h-7 object-cover mr-2" src={logo} alt="logo" />
              <h3 className="text-2xl">Designing Solutions</h3>
            </Link>
            <Link href="mailto:info@designingsolutions.co.in" className="pt-4 block opacity-60 hover:opacity-100">
              info@designingsolutions.co.in
            </Link>
          </div>

          <FooterLinkGroup title="For Employer" links={[
            { text: "Get an estimate", href: "#" },
            { text: "Feedback", href: "#" }
          ]} />

          <FooterLinkGroup title="Company" links={[
            { text: "Who we are", href: "#" },
            { text: "Careers", href: "#", badge: "WE'RE HIRING" },
            { text: "Team", href: "#" }
          ]} />

          <FooterLinkGroup title="Contact Info" links={[
            { text: "+91 85590-03498", href: "#" },
            { text: "+91 98780-04383", href: "#" }
          ]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            <h3 className="font-semibold text-lg mb-2">Our Address</h3>
            <p className="opacity-60 w-[90%] sm:w-[80%]">
              B-505-506 Fifth Floor, Bestech Business Tower-B, Sector-66, Mohali, Punjab-160062
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="flex gap-4 mb-4 md:mb-0">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
            </div>
            <p className="my-4 md:my-0 md:mt-4 text-center md:text-right">
              Talk to us — we’d love to create something amazing together!
            </p>
            <span className="opacity-60 text-center md:text-right">
              © 2025 Designing Solutions. All Rights Reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

interface LinkType {
  text: string;
  href: string;
  badge?: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: LinkType[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div className="flex flex-col gap-2">
    <h3 className="font-bold text-lg">{title}</h3>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className={`flex items-center hover:text-zinc-100 ${link.text === "Careers" ? "text-white" : "text-zinc-500"
          }`}
      >
        {link.text}
        {link.badge && (
          <span className="ml-2 px-2 py-1 bg-orange-500 text-white font-semibold text-xs rounded-md">
            {link.badge}
          </span>
        )}
      </Link>
    ))}
  </div>

);

interface SocialIconProps {
  Icon: React.ComponentType<{ className?: string }>;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon }) => (
  <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
    <Icon className="w-6 h-6" />
  </Link>
);

export default FooterSection;
