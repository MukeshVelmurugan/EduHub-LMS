export function setAuth(role, token) {
  localStorage.setItem(`${role}_token`, token);
  localStorage.setItem(`${role}_role`, role);
}

export function getAuth(role) {
  return {
    token: localStorage.getItem(`${role}_token`),
    role: localStorage.getItem(`${role}_role`),
  };
}

export function clearAuth(role) {
  localStorage.removeItem(`${role}_token`);
  localStorage.removeItem(`${role}_role`);
}
