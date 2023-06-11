import {
  Alexandria,
  Playfair_Display,
  Brygada_1918,
  Noto_Serif_Devanagari,
} from "next/font/google";

// Ui elements, some subtitles and some body copy
export const alexandria = Alexandria({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alexandria",
});

// Logo
export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

// Large headings
export const brygada_1918 = Brygada_1918({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brygada-1918",
});

// body copy
export const noto_serif_devanagari = Noto_Serif_Devanagari({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-devanagari",
});
