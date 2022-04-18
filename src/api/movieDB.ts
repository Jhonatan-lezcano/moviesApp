const baseURL = 'https://api.themoviedb.org/3/movie';
const api_key = 'b82979a3eca07c8ddfbefbe3c91b3667';
const language = 'es-ES';

const request = async <T>(paramRequest: string) => {
  const res = await fetch(
    `${baseURL}${paramRequest}?api_key=${api_key}&language=${language}`,
  );
  const data: T = await res.json();
  return data;
};

export default request;
