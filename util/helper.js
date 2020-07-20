export default function switchFontSizes(unit, titleLevel) {
  if (unit === "em") {
    switch (titleLevel) {
      case "h1":
        return 2;
      case "h2":
        return 1.5;
      case "h3":
        return 1.3;
      case "h4":
        return 1;
      case "h5":
        return 0.8;
      case "h6":
        return 0.7;
    }
  } else {
    switch (titleLevel) {
      case "h1":
        return 32;
      case "h2":
        return 24;
      case "h3":
        return 20;
      case "h4":
        return 16;
      case "h5":
        return 12;
      case "h6":
        return 11;
    }
  }
}
