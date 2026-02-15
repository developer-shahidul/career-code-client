export const jobsCreatedByPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app/jobs/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  ).then((res) => res.json());
};
