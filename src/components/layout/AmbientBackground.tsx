export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="ambient-blob ambient-blob-1 top-[-15%] left-[-10%] size-[340px] sm:size-[500px] lg:size-[680px]"
        style={{
          background: "radial-gradient(circle, rgba(124,102,255,.55) 0%, transparent 60%)",
        }}
      />
      <div
        className="ambient-blob ambient-blob-2 top-[20%] right-[-20%] size-[380px] sm:size-[560px] lg:size-[760px]"
        style={{
          background: "radial-gradient(circle, rgba(169,150,255,.45) 0%, transparent 60%)",
        }}
      />
      <div
        className="ambient-blob ambient-blob-3 bottom-[-20%] left-[10%] hidden size-[460px] sm:block lg:size-[620px]"
        style={{
          background: "radial-gradient(circle, rgba(124,102,255,.4) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
