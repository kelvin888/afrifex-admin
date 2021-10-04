function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken;
}

function getLocalRefreshToken() {
  const refreshToken = window.localStorage.getItem("refreshToken");
  return refreshToken;
}

export { getLocalAccessToken, getLocalRefreshToken };
