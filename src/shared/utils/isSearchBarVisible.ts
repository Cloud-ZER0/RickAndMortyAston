const isSearchBarVisible = (pathname: string): boolean => {
  if (pathname === "/signin" || pathname === "/signup") return false;
  return true;
};

export default isSearchBarVisible;
