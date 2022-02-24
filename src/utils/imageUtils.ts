export const getFileFromURI = async (uri: string) => {
  const result = await fetch(uri);
  return result.blob();
};
