import React from 'react';

// creates a div around the page for spacing and padding
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto">{children}</div>;
}
