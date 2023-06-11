export const isAuthenticated = async (): Promise<boolean> => {
    let result: boolean;
    return fetch(`http://localhost:3000/user`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.authState === "Authorized") {
          result = true;
        } else {
          result = false;
        }
        return result;
      });
  };
  