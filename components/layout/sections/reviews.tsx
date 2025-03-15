import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "L & T",
    username: "@L&T",
    body: "It's been great to collaborate and work with Designing Solutions. We know that the team has best interest in their mind and will find flexible solutions that best fit our business. Mr. Rahul Singh",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Airtel",
    username: "@Abdul_Ashfaq",
    body: "Designing Solutions and their team has positioned themselves as a leading business and technology partner in the market. Mr. Abdul Ashfaq",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "iCuerious",
    username: "@iCuerious",
    body: "Designing Solutions has been working with us on the development of our Product and it has been a great experience collaborating with them. Mr. Prince Garg",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Tata Project",
    username: "@Tata_Project",
    body: "These people make my life and my team's life easier. We run a network that supports 25,000 employees with four different networking departments. We have efficient network operations that need to run effortlessly 24/7 and Designing Solutions have all this covered. Mr. R.M Reddy",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Skillslab",
    username: "@Rishav_Sharma",
    body: "I had the pleasure of working with Designing Solutions Team on a recent project, and I couldn't be happier with the results. From start to finish, they demonstrated professionalism, expertise, and exceptional communication skills. Mr. Rishav Sharma",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "ProGIS Tech Team",
    username: "@ProGIS_Tech_Team",
    body: "Designing Solutions did an outstanding job developing our Employee Management Survey App. The app has significantly streamlined our employee survey process and attention to detail made the entire experience seamless. We are grateful for their hard work. Thank you, Designing Solutions, for your excellent service!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-xs w-full h-[250px] cursor-pointer overflow-hidden rounded-xl border p-4 break-words",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-600">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex min-h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
      {/* Moves Left */}
      <Marquee pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Moves Right */}
      <Marquee reverse pauseOnHover>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
