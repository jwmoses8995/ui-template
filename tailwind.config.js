import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      border: "rgb(var(--border) / <alpha-value>)",
      input: "rgb(var(--input) / <alpha-value>)",
      ring: "rgb(var(--ring) / <alpha-value>)",
      background: "rgb(var(--background) / <alpha-value>)",
      foreground: "rgb(var(--foreground) / <alpha-value>)",
      primary: {
        DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
        foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
        foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
      },
      muted: {
        DEFAULT: "rgb(var(--muted) / <alpha-value>)",
        foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "rgb(var(--accent) / <alpha-value>)",
        foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
      },
      popover: {
        DEFAULT: "rgb(var(--popover) / <alpha-value>)",
        foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
      },
      card: {
        DEFAULT: "rgb(var(--card) / <alpha-value>)",
        foreground: "rgb(var(--card-foreground) / <alpha-value>)",
      },
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};

const newLocal = "tailwindcss-animate";
export const plugins = [require(newLocal)];
