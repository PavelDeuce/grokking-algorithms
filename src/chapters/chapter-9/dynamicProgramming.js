const getEditDistance = (string1, string2) => {
  if (!string1 || string1.length === 0) return string2.length;
  if (!string2 || string2.length === 0) return string1.length;

  const [head1, ...tail1] = string1;
  const [head2, ...tail2] = string2;
  if (head1 === head2) return getEditDistance(tail1, tail2);

  const length1 = getEditDistance(string1, tail2);
  const length12 = getEditDistance(tail1, string2);
  const length13 = getEditDistance(tail1, tail2);

  return 1 + Math.min(length1, length12, length13);
};

export default getEditDistance;
