export const myApplicationPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications/applicant?email=${email}`, {
    credentials: "include",
    headers: { authorization: `Bearer ${accessToken}` },
  }).then((res) => res.json());
};
