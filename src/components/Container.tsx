import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className={cn("bg-linear-bg-primary", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
