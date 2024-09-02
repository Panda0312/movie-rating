import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { Provider as ChakraProvider } from "./ChakraProvider";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";

import "./globals.css";
import { server } from "@/mocks/node";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Rating",
  description: "Generated by create next app",
};

const API_SERVER = process.env.API_SERVER;
if (process.env.NODE_ENV === "development") {
  server.listen({
    onUnhandledRequest: "bypass",
  });
  server.events.on("request:start", ({ request }) => {
    console.log("MSW intercepted:", request.method, request.url);
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data = [];
  try {
    let res = await fetch(`${API_SERVER}/movies`);
    data = await res.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider movies={data}>
          <ChakraProvider>
            <main className="sm:w-[1080px] w-full mx-auto">
              <Header />
              {children}
            </main>
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
