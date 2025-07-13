declare module 'react-use-keypress' {
  type KeyOrKeys = string | string[];
  type Handler = (event: KeyboardEvent) => void;
  
  export default function useKeypress(keys: KeyOrKeys, handler: Handler): void;
}