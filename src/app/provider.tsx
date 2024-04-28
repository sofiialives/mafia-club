import { UserProvider } from "@/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
}
