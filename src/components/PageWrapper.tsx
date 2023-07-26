// creates a div around the page for spacing and padding
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto px-2 h-full">{children}</div>;
}
