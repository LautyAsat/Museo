export default function Subtitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="text-6xl text-black font-cormorant font-bold mb-6">
      {children}
    </h2>
  );
}
