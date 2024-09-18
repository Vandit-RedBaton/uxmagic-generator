import { create } from "zustand";

type GenerativeServiceState = {
    prompt : string
    setPrompt: (prompt: string) => void
    mode : string
    setMode: (mode: string) => void
};

export const useGenerativeService = create<GenerativeServiceState>((set) => ({
    prompt: "",
    setPrompt: (prompt: string) => set({ prompt: prompt }),
    mode: "Mobile",
    setMode: (mode: string) => set({ mode: mode }),
}))

type GetComponentsFromPrompt = {
    components : {
      slug : string
      desktop_image_svg: string
      mobile_image_svg: string
      desktop_binary?: string
      mobile_binary?: string
      tags: string[]
      category_name?: string
      webflow_code?: string
      html_code?: string
      wordpress_code?: string 
    } | null
    setComponents: (components: any) => void
}

export const getComponentsFromPrompt = create<GetComponentsFromPrompt>((set) => ({
    components: null,
    setComponents: (components: any) => set({ components: components }),
}))