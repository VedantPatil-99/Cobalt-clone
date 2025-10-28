import Image from "next/image";
import React from "react";
const iconPaths = [
  "/logos/amazon-icon.svg",
  "/logos/boa-icon.svg",
  "/logos/capital-icon.svg",
  "/logos/chase-icon.svg",
  "/logos/citi-icon.svg",
  "/logos/excel-iocn.svg",
  "/logos/quickbooks-icon.png",
  "/logos/sage-icon.svg",
  "/logos/shopify-icon.svg",
  "/logos/slack-icon.svg",
  "/logos/square-icon.svg",
  "/logos/stripe-icon.svg",
  "/logos/td-icon.svg",
  "/logos/xero-icon.svg",
  "/logos/zoho-icon.svg",
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const IconShowcase: React.FC = () => {
  // Create 5 columns, each with 3 icons
  const iconColumns = chunkArray(iconPaths, 3);

  return (
    <div className="flex w-full justify-center overflow-hidden px-2">
      <div className="flex flex-row gap-x-20 mask-x-from-85%">
        {iconColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-y-8 even:mt-6">
            {col.map((iconPath, iconIdx) => (
              <div
                key={iconIdx}
                className="flex h-20 w-20 items-center justify-center rounded-full border-1 border-neutral-300/20 bg-neutral-950 p-4 shadow-lg"
              >
                <Image
                  src={iconPath}
                  width={40}
                  height={40}
                  alt={`${iconPath.split("/")[2].split("-")[0]} logo`}
                  className="h-10 w-10 object-contain" // Set a consistent size
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconShowcase;
