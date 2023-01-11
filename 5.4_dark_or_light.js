const color = (myColor) => {
  switch (myColor.toLowerCase()) {
    case "yellow" || "pink" || "orange":
      return "light color";
    case "blue" || "purple" || "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
};
