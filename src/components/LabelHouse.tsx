
import { FC } from "react";
import { cn } from "@/utils";

interface LabelHouseProps {
  label: string;
  className?: string;
}

const LabelHouse: FC<LabelHouseProps> = ({ label, className }) => {
  return <p className={cn("text-house", className)}>{label}</p>;
};

export default LabelHouse;
