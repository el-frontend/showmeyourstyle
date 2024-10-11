import { ReactNode } from "react";

export type StepProps = {
  title: string;
  icon: ReactNode;
  description: string;
  image: string;
};

export default function Step({ title, icon, description, image }: StepProps) {
  return (
    <div
      className="aspect-square bg-red-400 bg-cover bg-center rounded-3xl text-center text-white flex flex-col p-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="text-3xl">{title}</span>
      <div className="flex-grow grid place-content-center">{icon}</div>
      <span>{description}</span>
    </div>
  );
}
