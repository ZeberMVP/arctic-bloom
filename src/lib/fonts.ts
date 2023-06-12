import { Alexandria, Playfair_Display } from "next/font/google";

// Ui elements, subtitles and body copy
export const alexandria = Alexandria({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alexandria",
});

// Headings
export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});
