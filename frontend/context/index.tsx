import { UserProvider } from "./UserContext/UserContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export { useUser } from "./UserContext/hooks/useUser";
export { AppProvider };
