export const handelOnCopy = async (
    html_content: string,
    actionType: string = "COPY"
  ) => {
    if (!html_content) return;
    const clipboardItem = await copyHtmlToClipboard(html_content, actionType);

    return clipboardItem?.types?.[0];
  };

  
export  async function copyHtmlToClipboard(htmlContent: string, actionType: string) {
    try {
      const htmlBlob = new Blob([htmlContent], { type: "text/html" });
      const plainTextBlob = new Blob([htmlContent], { type: "text/plain" });
      const clipboardItem = new ClipboardItem({
        "text/html": htmlBlob,
        "text/plain": plainTextBlob,
      });
  
      return clipboardItem;
  }catch (error) {
    console.log(error);
  }
}
