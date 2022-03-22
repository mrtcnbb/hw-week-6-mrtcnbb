export default function useCookie() {
  // Use this to assign token to a variable
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  const token = getCookie('token');
  const username = getCookie('username');

  // Use this to delete token before logout
  const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  return { username, token, deleteCookie };
}
