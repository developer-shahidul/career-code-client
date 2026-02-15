export const myApplicationPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app/applications/applicant?email=${email}`,
    {
      credentials: "include",
      headers: { authorization: `Bearer ${accessToken}` },
    },
  ).then((res) => res.json());
};
