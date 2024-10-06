// /app/login/layout.tsx
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="about min-h-screen flex flex-col bg-white">
        {children}
      </div>
    );
  }
  