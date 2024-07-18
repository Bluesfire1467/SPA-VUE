

const isAuthenticatedGuard = (to, from, next) => {


  return next();
};

export default isAuthenticatedGuard;