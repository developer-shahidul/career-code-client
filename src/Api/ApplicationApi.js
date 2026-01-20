export const myApplicationPromise = (email) => {
  return fetch(
    `http://localhost:3000/applications/applicant?email=${email}`,
  ).then((res) => res.json());
};
