function countryToLiveIn(
  language = "",
  islands = false,
  population = 0,
  country = ""
) {
  return language.toLocaleLowerCase() === "english" &&
    population < 50 &&
    islands === false
    ? `You should live in ${country}`
    : `${country} does not meet your criteria`;
}

console.log(countryToLiveIn("english", false, 55, "Finland"));
