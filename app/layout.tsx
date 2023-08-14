"use client";

import Footer from "@/components/Footer";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import { usePathname } from "next/navigation";
import { Inspection } from "@/types/Inspection";
import { InspectionContext } from "@/contexts/InspectionContext";
import { useEffect, useState } from "react";
import Firebase from "@/lib/firebase";
const firebase = new Firebase();

type InspectionProviderProps = {
  children: React.ReactNode;
};

export const InspectionProvider: React.FC<InspectionProviderProps> = ({
  children,
}) => {
  //Declare contexts here (Inspections and prb from local storage)
  const [prb, setPrb] = useState("");
  const [inspections, setInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    const prb = localStorage.getItem("prb");
    if (prb) {
      setPrb(JSON.parse(prb));
    }
  }, []);

  useEffect(() => {
    if (inspections.length == 0) {
      firebase
        .getAllInspections()
        .then((data) => {
          setInspections(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <InspectionContext.Provider value={{ prb, inspections, setInspections }}>
      {children}
    </InspectionContext.Provider>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <InspectionProvider>
          {pathname !== "/" && <Nav />}
          <main className="">{children}</main>
          {pathname !== "/" && <Footer />}
        </InspectionProvider>
      </body>
    </html>
  );
}
