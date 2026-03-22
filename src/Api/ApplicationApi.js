export const myApplicationPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-lake.vercel.app/applicant?email=${email}`,
    {
      credentials: "include",
      headers: { authorization: `Bearer ${accessToken}` },
    },
  ).then((res) => res.json());
};
