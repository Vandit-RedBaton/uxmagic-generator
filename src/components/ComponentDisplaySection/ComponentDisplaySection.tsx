import { getComponentsFromPrompt, useGenerativeService } from "@/hooks/useGenerativeService";
import Image from "next/image";
import React from "react";
import sanitizeHTML from "../../../utils/SanitizeUtils";
import Mobile from "@/assets/Mobile";
import Desktop from "@/assets/Desktop";

const ComponentDisplaySection = () => {
    
  const { setMode, mode } = useGenerativeService();

  const { components: component } = getComponentsFromPrompt();

  if (!component)
    return (
      <Image
        src="/BottomImage.svg"
        width={400}
        height={400}
        alt="Logo"
        className="mx-auto"
      />
    );

  return (
    <div className="flex flex-col gap-4 py-8 pb-16">
      <div className="text-secondary text-base flex justify-between w-full max-w-[500px] mx-auto">
      Generated Component
        <div className="flex items-center gap-2 border rounded-md">
          <Mobile
            width={28}
            height={28}
            onClick={() => setMode("Mobile")}
            stroke={mode === "Mobile" ? "#306FCB" : "#505F79"}
          />
          <div className="h-full w-[1px] bg-[#D9D9D9]" />
          <Desktop
            width={28}
            height={28}
            onClick={() => setMode("Desktop")}
            stroke={mode === "Desktop" ? "#306FCB" : "#505F79"}
          />
        </div>
      </div>

      <div className="w-fit h-fit relative mx-auto shadow-componentShadow group bg-[#F5F5F5] p-2 transition-all duration-300">
        <div
          dangerouslySetInnerHTML={{
            __html: mode === "Mobile" ? sanitizeHTML(component?.mobile_image_svg) : sanitizeHTML(component?.desktop_image_svg),
          }}
          className={`component${mode} max-w-fit mx-auto border h-fit`}
        />
        <div className="w-full h-full absolute top-0 left-0 justify-center hidden group-hover:flex items-center z-1 bg-componentHover text-white font-semibold transition-all duration-300">
          <button className="bg-primary px-4 py-2 rounded-md">
            ✅ Exported
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentDisplaySection;
