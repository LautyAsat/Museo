export default function Section({
  children,
  classname,
  ...props
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <section className={`spy-4 pt-20 ${classname}`} {...props}>
      {children}
    </section>
  );
}
