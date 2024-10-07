// /app/login/layout.tsx
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="ogin-container min-h-screen flex flex-col justify-center items-center bg-white">
        {children}
      </div>
    );
  }
  