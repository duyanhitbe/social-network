export function setToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", token);
  }
}

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
}
