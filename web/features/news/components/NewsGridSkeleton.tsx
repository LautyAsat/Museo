export default function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 lg:min-h-[900px] 2xl:min-h-[1200px] gap-4 bg-background">
      <div className="col-span-2 row-span-2 bg-gray-100 animate-pulse"></div>
      <div className="col-span-1 row-span-1 bg-gray-100 animate-pulse"></div>
      <div className="col-span-1 row-span-1 bg-gray-100 animate-pulse"></div>
    </div>
  );
}
