import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_BASE_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

const config = {
  headers: {
    Authorization: `Token ${GITHUB_TOKEN}`,
  },
};

// Get search users (testing propose)
export const searchUser = async (text) => {
  // const params = new URLSearchParams({
  //   q: text,
  // });

  // const config = {
  //   headers: {
  //     Authorization: `Token ${GITHUB_TOKEN}`,
  //   },
  // };

  // const response1 = await fetch(API_URL, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });

  const response2 = await axios.get(
    `${GITHUB_URL}/search/users?q=${text}`,

    config
  );

  console.log(response2);

  // const response = await github.get(`/search/users?q=${text}`);

  return response2.data.items;
};

// Get a single user and repos

export const getUserAndRepos = async (login) => {
  // const params = new URLSearchParams({
  //   sort: "created",
  //   per_page: 10,
  // });

  const response1 = await axios.get(
    `${GITHUB_URL}/users/${login}`,

    config
  );

  const response2 = await axios.get(
    `${GITHUB_URL}/users/${login}/repos?sort=created&per_page=10`,

    config
  );

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?sort=created&per_page=10`),
  ]);

  const [user1, repos1] = await Promise.all([response1, response2]);
  console.log(user1);
  console.log(repos1);
  return { user: user1.data, repos: repos1.data };
};
