export const getJikanResponse = async ({ resource, query }) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${queryString}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const api = await response.json();
    return api;
  } catch (err) {
    console.error("Error fetching Jikan API:", err);
    throw err;
  }
};
