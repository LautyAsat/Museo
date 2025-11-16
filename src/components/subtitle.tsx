export default function Subtitle({
  children,
  classname = "",
  ...props
}: Readonly<{
  children: React.ReactNode;
  classname?: string;
}>) {
  return (
    <h2
      className={`text-6xl text-black font-cormorant font-bold mb-6 ${classname}`}
      {...props}
    >
      {children}
    </h2>
  );
}
