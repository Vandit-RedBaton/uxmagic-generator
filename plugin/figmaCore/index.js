var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function showUI(_a) {
    return __awaiter(this, arguments, void 0, function* ({ SITE_URL }) {
        let size = {
            w: 600,
            h: Math.round(2 * figma.viewport.bounds.height),
        };
        try {
        }
        catch (_) { }
        figma.showUI(`<script>window.location.href = '${SITE_URL}'</script>`, {
            width: size.w,
            height: size.h,
            title: "Admin - Component Generator",
        });
    });
}
