import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Cor primária (cinza-escuro)
        secondary: "#3b82f6", // Cor secundária (azul)
        accent: "#10b981", // Cor de destaque (verde)
        background: "#f3f4f6", // Cor de fundo (cinza-claro)
        text: "#111827", // Cor do texto (preto)
      },
    },
  },
  plugins: [],
};
export default config;
