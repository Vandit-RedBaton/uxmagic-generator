const sanitizeHTML = (html :any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    const allowedTags = ['svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'g'];
    const allowedAttributes = ['d', 'fill', 'stroke', 'stroke-width', 'viewbox', 'xmlns', 'height', 'width', 'x', 'y', 'r', 'cx', 'cy', 'points'];
  
    const sanitizeNode = (node : any) => {
      if (!allowedTags.includes(node.nodeName.toLowerCase())) {
        node.remove();
        return;
      }
  
      [...node.attributes].forEach(attr => {
        if (!allowedAttributes.includes(attr.name.toLowerCase())) {
          node.removeAttribute(attr.name);
        }
      });
  
      [...node.childNodes].forEach(childNode => sanitizeNode(childNode));
    };
  
    [...doc.body.childNodes].forEach(childNode => sanitizeNode(childNode));
  
    return doc.body.innerHTML;
  };
  

  export default sanitizeHTML;