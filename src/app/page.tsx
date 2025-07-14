// This page should never be reached due to middleware redirect
// But just in case, show a loading state
export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted">Loading presentation...</p>
      </div>
    </div>
  );
}
