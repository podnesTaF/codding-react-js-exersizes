const reverse = (str) => {
  if (str.length === 0) return "";

  while (str.length > 0) {
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
};

console.log(reverse("rithmschool"));
