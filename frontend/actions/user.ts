export const getSessionUser = async () => {
  const res = await fetch("http://localhost:8080/users/me", {
    credentials: "include",
  });

  const { data } = await res.json();

  if (res.ok) {
    return data;
  } else {
    return null;
  }
};
