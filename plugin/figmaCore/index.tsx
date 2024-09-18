export async function showUI({ SITE_URL }: any) {
  let size: { w: number; h: number } = {
    w: 600,
    h: Math.round(2 * figma.viewport.bounds.height),
  };
  try {
  } catch (_) {}

  figma.showUI(`<script>window.location.href = '${SITE_URL}'</script>`, {
    width: size.w,
    height: size.h,
    title: "Admin - Component Generator",
  });
}
