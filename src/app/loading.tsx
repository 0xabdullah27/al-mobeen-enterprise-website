export default function Loading() {
  return (
    <div className="pt-32 pb-20 bg-base min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-10 h-10 rounded-full border-3 border-primary border-t-transparent animate-spin" />
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral">
          Loading Al Mobeen Enterprise...
        </p>
      </div>
    </div>
  );
}
