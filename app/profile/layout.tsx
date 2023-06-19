import "../../styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "PRC Accrediation Application System",
  description: "Thesis keme",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[80vh] bg-[#F9FAFE] px-6 lg:px-12 py-6">{children}</section>
  );
}