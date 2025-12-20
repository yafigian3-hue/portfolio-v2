function BackgroundGradient() {
  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          radial-gradient(1px 1px at 10% 10%, #fff, transparent),
          radial-gradient(1px 1px at 20% 50%, #eee, transparent),
          radial-gradient(1.5px 1.5px at 40% 80%, #fff, transparent),
          radial-gradient(1px 1px at 80% 30%, #ddd, transparent),
          radial-gradient(125% 125% at 50% 10%, transparent 50%, #00008B 100%)
        `,
        // Menggunakan ukuran persentase atau vw agar bintik mengikuti skala layar
        backgroundSize: "25% 25%, 30% 30%, 40% 40%, 50% 50%, 100% 100%",
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
}

export default BackgroundGradient;