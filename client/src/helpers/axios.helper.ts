export function getErrorMessage(err: any) {
  if (err.response?.data?.message) {
    return err.response?.data?.message;
  }
  return err.message;
}

export function getAxiosOptions(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
