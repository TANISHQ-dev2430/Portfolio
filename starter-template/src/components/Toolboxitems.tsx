import { Techicon } from "@/components/Techicon";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
  toolboxitems,
  className,
  itemsWrapperClassName,
}: {
  toolboxitems: {
    tittle: string;
    iconType: React.ElementType;
    
  }[];
  className?: string;
    itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {toolboxitems.map((item) => (
          <div
            key={item.tittle}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
          >
            <Techicon component={item.iconType} />
            <span className="font-semibold">{item.tittle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
