import create from 'zustand';
import { Tool } from './tools';
import { Element } from './element';

export interface AppState {
  elements: Element[];
  setElements: (elements: Element[]) => void;
  selectedElement: null | Element;
  setSelectedElement: (element: null | Element) => void;
  tool: Tool;
  setTool: (tool: Tool) => void;
  canvasCtx: null | CanvasRenderingContext2D;
  setCanvasCtx: (ctx: null | CanvasRenderingContext2D) => void;
}

export const useStore = create<AppState>()((set) => ({
  elements: [],
  setElements: (elements) => set((_state) => ({ elements })),
  selectedElement: null,
  setSelectedElement: (element) => set((_state) => ({ selectedElement: element })),
  tool: Tool.Rectangle,
  setTool: (tool) => set((_state) => ({ tool })),
  canvasCtx: null,
  setCanvasCtx: (ctx) => set((_state) => ({ canvasCtx: ctx })),
}));
