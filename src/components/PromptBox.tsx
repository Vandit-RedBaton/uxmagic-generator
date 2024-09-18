import { useGenerativeService } from "@/hooks/useGenerativeService";
import React from "react";

const PromptBox = () => {
  const { prompt, setPrompt } = useGenerativeService();
  return (
    <div className="w-full relative">
      <textarea
        rows={5}
        maxLength={500}
        className="w-full focus:outline-none border p-4 pt-2 resize-none noScrollbar rounded-md"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="absolute bottom-3 right-3">
        <p className="text-secondary text-xs">{prompt.length}/500</p>
      </div>
    </div>
  );
};

export default PromptBox;
