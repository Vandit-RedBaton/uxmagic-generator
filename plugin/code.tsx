import { showUI } from "./figmaCore/index";

declare const SITE_URL: string;

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  if (selection.length > 0) {
  }
});

figma.ui.onmessage = async (message, props) => {
  await handleMessage(message);
};

async function handleMessage(message: any) {
  switch (message.type) {
    case "EVAL": {
      const fn = eval.call(null, message.code);
      try {
        const result = await fn(figma, message.params);
        figma.ui.postMessage({
          type: "EVAL_RESULT",
          result,
          id: message.id,
        });
      } catch (e) {
        figma.ui.postMessage({
          type: "EVAL_REJECT",
          error:
            typeof e === "string"
              ? e
              : e && typeof e === "object" && "message" in e
              ? e.message
              : null,
          id: message.id,
        });
      }
      break;
    }
    default:
      break;
  }
}

function main() {
  showUI({ SITE_URL });
}

main();
