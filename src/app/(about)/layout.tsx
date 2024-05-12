import InsightsRoll from "@/src/components/About/InsightsRoll";
import { ReactNode } from "react";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

interface Props {
  children: ReactNode;
}

const AboutLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightsRoll insights={insights} />
      {children}
    </main>
  );
};

export default AboutLayout;
