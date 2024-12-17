const extractErrorMessage =  (err: any) => {
  const errorMassage = err.graphQLErrors[0]?.extensions?.originalError?.message;
  if (!errorMassage){
    return;
  }
  if (Array.isArray(errorMassage)) {
    return formatErrorMessage(errorMassage[0]);
  } else {
    return formatErrorMessage(errorMassage);
  }
};

const formatErrorMessage = (errorMessage: string) => {
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

export { extractErrorMessage }