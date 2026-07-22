export default function SectionDivider() {
  return (
    <div className="section-divider relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background border border-violet/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-violet/40" />
        </div>
      </div>
    </div>
  );
}
