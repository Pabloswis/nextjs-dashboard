import { Inter, Lusitana, Roboto_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
