/// <reference types="react-scripts" />

declare module 'randomcolor'{
  function randomColor({ luminosity, format }:{luminosity?: string; format: string}): string;
  export default randomColor;
}

declare module 'shrink-string'{
  function compress(target: string): Promise<string>;
  function decompress(target: string): Promise<string>;
  export { compress, decompress };
}

declare module 'md' {
  function md(text: string): string;
  export default md;
}
