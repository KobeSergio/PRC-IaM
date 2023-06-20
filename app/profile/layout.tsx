import "../../styles/globals.css";

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
    <section className="min-h-[80vh] w-full bg-[#F9FAFE] px-6 lg:px-12 py-6">{children}</section>
  );
}