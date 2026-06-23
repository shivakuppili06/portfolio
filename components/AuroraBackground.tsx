export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* floating gradient blobs */}
      <div className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px] animate-float" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
