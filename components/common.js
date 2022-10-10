export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

export const formatCurrency = (num) => {
  try {
    if (num) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } catch (e) {}
  return num;
};

export const numToWords = (num) => {
  let a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if ((num = num.toString()).length > 9) return "overflow";
  let n = num.split("");
  n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return "";
  var str = "";
  str +=
    n[1] !== "00"
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] !== "00"
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] !== "00"
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] !== "00"
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] !== "00"
      ? (str !== "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        ""
      : "";
  return str;
};

export const currencyInWords = (value) => {
  if (isEmpty(value)) return "";
  var number = parseFloat(value);
  if (number === undefined) return "";
  let num = value.toString().split(".");

  var Rs = numToWords(num[0]).toUpperCase();
  if (num.length === 1) return Rs + " RUPEES ONLY";

  //Get two digit decimal
  var num2 = (num[1] + "0").substring(0, 2);
  if (num2[0] === "0") num2 = num2[1];

  var Paisa = numToWords(num2).toUpperCase();
  return Rs + " RUPEES AND " + Paisa + " PAISA ONLY";
};
export const capitalizeString = (string) => {
  if (string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }
};

export const getBase64ImageFromURL = (url) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };

    img.onerror = (error) => {
      reject(error);
    };

    img.src = url;
  });
};
