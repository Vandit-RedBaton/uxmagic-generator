var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showUI } from "./figmaCore/index";
figma.on("selectionchange", () => {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
    }
});
figma.ui.onmessage = (message, props) => __awaiter(void 0, void 0, void 0, function* () {
    yield handleMessage(message);
});
function handleMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (message.type) {
            case "EVAL": {
                const fn = eval.call(null, message.code);
                try {
                    const result = yield fn(figma, message.params);
                    figma.ui.postMessage({
                        type: "EVAL_RESULT",
                        result,
                        id: message.id,
                    });
                }
                catch (e) {
                    figma.ui.postMessage({
                        type: "EVAL_REJECT",
                        error: typeof e === "string"
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
    });
}
function main() {
    showUI({ SITE_URL });
}
main();
