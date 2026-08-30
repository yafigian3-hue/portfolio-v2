function BackgroundGradient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* Main blue glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] sm:h-[400px] sm:w-[550px] sm:blur-[120px] md:h-[500px] md:w-[700px] md:blur-[130px] lg:h-[600px] lg:w-[800px] lg:blur-[140px]" />

      {/* Secondary blue glow */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default BackgroundGradient;
