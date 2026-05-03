import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CitationWatch – Monitor Local Business Citations",
  description: "Track your business NAP consistency across 50+ local directories. Get alerted instantly when citations become inconsistent."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9abf9da7-c4f2-4be0-8036-dc2711ffd325"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
