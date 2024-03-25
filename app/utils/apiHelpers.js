export const callApi = async () => {
  try {
    const response = await fetch(`https://example.com/`);
    if (!response.ok) throw new Error(`API call failed`);
  } catch (error) {
    console.error('API call error:', error);
  }
};
