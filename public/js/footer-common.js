function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var cookieEmail = getCookie("cross-domain-email");
var cookieName = getCookie("cross-domain-name");

/*Show Hide Sign In, Sign Up And Open copilot Button Based on User Login Status*/
if (cookieEmail) {
  $("#signin-signup-btn").hide();
  $(".opensalescamp-btn").css("display", "flex");
} else {
  $("#signin-signup-btn").show();
  $(".opensalescamp-btn").hide();
}
/* Campaign Tracking Code */
const userObj = {};
if (cookieEmail) userObj.email = cookieEmail;
if (cookieName) userObj.name = cookieName;
function createCookie(name, value, days = 1, path = "/") {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + value + expires + ";domain=.copilot.app;path=" + path;
}
function delete_cookie(name) {
  document.cookie =
    name +
    "=; Path=/; domain=.salescamp.app; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
var urlParams = new URLSearchParams(window.location.search);
var entries = urlParams.entries();
for (pair of entries) {
  if (pair[0].startsWith("utm_")) {
    userObj[pair[0]] = pair[1];
    createCookie(pair[0], pair[1]);
  }
}
var url = new URL(window.location.href.toString());
var source = url.searchParams.get("utm_source");
var ref = url.searchParams.get("ref");
if (!source && ref && ref != null && ref != "") {
  createCookie("utm_source", ref);
  createCookie("ref", ref);
  //Remove other source
  //delete_cookie('utm_source');
  delete_cookie("utm_medium");
  delete_cookie("utm_campaign");
}
// Site refferrer
var emptysitereferrar = getCookie("referrer");
var sitereferrar = document.referrer;
if (sitereferrar && sitereferrar != "") {
  var cbearbuk = sitereferrar.indexOf("copilot.app");
  if (cbearbuk == -1) {
    if (emptysitereferrar == null || emptysitereferrar == "") {
      createCookie("referrer", sitereferrar);
    }
  }
}
setLoginUser();
setIdentity(userObj);
function setLoginUser() {
  if (cookieName != "") {
    $(".not-logged-in").css("display", "none");
    $(".logged-in").css("display", "inline");
    var oneletter = cookieName.substring(0, 1);
    $(".dyn-username").html(cookieName);
    $(".dyn-firstletter").html(oneletter);
  }
}
function setIdentity(userObj) {
  try {
    if (userObj && userObj.email) analytics.identify(userObj.email, userObj);
  } catch (e) {
    console.log("ERROR:Analytics", e.message);
  }
}

(function (d, u, h, s) {
  h = d.getElementsByTagName("head")[0];
  s = d.createElement("script");
  s.async = 1;
  s.src = u + new Date().getTime();
  h.appendChild(s);
})(
  document,
  "https://grow.clearbitjs.com/api/pixel.js?k=pk_692a454ab7e074d7a40725726a90ed7e&v="
);

var cookieToken = getCookie("sc-nolt-token");
if (cookieToken && nolt) {
  nolt("identify", { jwt: cookieToken });
}

$(document).ready(function () {
  $(document).ready(function () {
    window.onload = function () {
      var nam = $(".feature-tab-link").attr("id");
      if (nam === "tab1") {
        $(".tab-head-text").css("color", "#00a2e0");
        $(".upper-arrow").css("fill", "#00a2e0");
      }
    };
    $(".feature-tab-link").click(function () {
      var nam = $(this).attr("id");
      if (nam === "tab1") {
        $(".tab-head-text").css("color", "#00a2e0");
        $(".upper-arrow").css("fill", "#00a2e0");
      } else if (nam === "tab2") {
        $(".tab-head-text").css("color", "#70bc95");
        $(".upper-arrow").css("fill", "#70bc95");
      } else if (nam === "tab3") {
        $(".tab-head-text").css("color", "#735cd2");
        $(".upper-arrow").css("fill", "#735cd2");
      } else if (nam === "tab4") {
        $(".tab-head-text").css("color", "#ff6b6b");
        $(".upper-arrow").css("fill", "#ff6b6b");
      }
    });
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-hero");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

window.noltQueue = window.noltQueue || [];
function nolt() {
  noltQueue.push(arguments);
}

//   /* Monthly and  Annually Price can be changed to modify below array (Just for developer)*/
// var monthly_price_array = ["12", "29", "49", "99"];
// var annually_price_array = ["9", "24", "39", "79"];
// $(function () {
//   //  onLoad_activateplan();
//   mouseHover();
//   mobileInfoboxToggle();
//   payPlanToggle();
// });
// function onLoad_activateplan() {
//   /*On Load */
//   $(".lpc-annually").addClass("lpc-activated-payplan");
//   $(".lpc-monthly").removeClass("lpc-activated-payplan");
//   $(".lpc-billed-type").html("billed annually");
//   changePricePlan(annually_price_array);
// }
// function payPlanToggle() {
//   $(".lpc-switch-cover").on("click", function () {
//     $(".lpc-switch-cover")
//       .find(".lpc-switch-btn")
//       .toggleClass("lpc-toggle-opposite");
//     /* Set Activated Class And Run Toggle */
//     if (
//       $(".lpc-switch-cover")
//         .find(".lpc-switch-btn")
//         .hasClass("lpc-toggle-opposite")
//     ) {
//       /*Monthly*/
//       $(".lpc-annually").removeClass("lpc-activated-payplan");
//       $(".lpc-monthly").addClass("lpc-activated-payplan");
//       $(".lpc-billed-type").html("billed monthly");
//       $(".lpc-plan-annualy-saving.lpc-plan-saving").addClass(
//         "lpc-plan-saving-activate"
//       );
//       changePricePlan(monthly_price_array);
//     } else {
//       /*Annually*/
//       $(".lpc-annually").addClass("lpc-activated-payplan");
//       $(".lpc-monthly").removeClass("lpc-activated-payplan");
//       $(".lpc-billed-type").html("billed annually");
//       $(".lpc-plan-annualy-saving.lpc-plan-saving").removeClass(
//         "lpc-plan-saving-activate"
//       );
//       changePricePlan(annually_price_array);
//     }
//   });
// }
// /* Set Value On Toggle */
// function changePricePlan(price_array) {
//   /*For Desktop*/
//   $(".lpricing-table-price-row")
//     .find(".lpc-cell")
//     .each(function (i) {
//       $(this)
//         .find(".lpc-column-heading")
//         .html("$" + price_array[i]);
//     });
//   /*For Mobile*/
//   $(".lpricing-mobile-table")
//     .find(".lpc-plan-wrap")
//     .each(function (i) {
//       $(this)
//         .find(".lpc-mob-price")
//         .html("$" + price_array[i]);
//     });
// }
// function mobileInfoboxToggle() {
//   $(".lpc-toggle-link").on("click", function () {
//     $(".lpc-toggle-info-box").slideUp("fast");
//     $(".lpc-toggle-link").slideDown("fast");
//     $(this)
//       .parent(".lpc-description-cover")
//       .find(".lpc-toggle-info-box")
//       .slideDown("slow");
//     $(this).slideUp("slow");
//   });
// }
// function mouseHover() {
//   $(".lpricing-section-row").hover(
//     function () {
//       if (!$(this).hasClass("lpc-block-heading")) {
//         $(this).append("<div class='lpricing-hover-row'></div>");
//       } else {
//       }
//     },
//     function () {
//       $(this).find(".lpricing-hover-row").remove();
//     }
//   );
// }

function GetGridElementsPosition(index, element) {
  const colCount = $(".glossary-collection-list")
    .css("grid-template-columns")
    .split(" ").length;
  const colPosition = index % colCount;
  const rowPosition = Math.floor(index / colCount);
  if (colPosition == 2) {
    $("<div></div>").insertBefore($(element));
  }
  if (colPosition == 1) {
    $("<div></div><div></div>").insertBefore($(element));
  }
}
var array = [];
$(document).ready(function () {
  $(".glossary-content-card").each(function () {
    var char = $(this).children(".glossary-card-heading").text().charAt(0);
    if (array.includes(char)) {
      return;
    } else {
      $('<div class="main-word">' + char + "</div>").insertBefore($(this));
      array.push(char);
      GetGridElementsPosition(
        $(this).prev(".main-word").index(),
        $(this).prev(".main-word")
      );
    }
  });
});
