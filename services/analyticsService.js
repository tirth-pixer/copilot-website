import { isDev } from "../lib/constants";

let analytics;

export const getCookie = (cname) => {
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
};

/**
 * @desc init analytics
 */
export const initAnalytics = () => {
  try {
    if (process.browser) {
      if (isDev()) {
        console.log("initAnalytics");
        return;
      }
      const amplitude = require("amplitude-js");
      analytics = amplitude.default.getInstance();
      if (process.env.NEXT_PUBLIC_AMPLITUDE_ANALYTICS_KEY)
        analytics.init(process.env.NEXT_PUBLIC_AMPLITUDE_ANALYTICS_KEY);
    }
  } catch (e) {
    console.log("ANALYTICS ERROR", e);
  }
};

/**
 * @desc set userid and email for analytics
 */
export const setAnalyticUser = () => {
  try {
    if (process.browser) {
      const user = {};
      user.email = getCookie("cross-domain-email");
      user.name = getCookie("cross-domain-name");
      if (!user?.email) return;

      if (isDev()) {
        console.log("setAnalyticUser", user?.email);
        return;
      }
      if (user && user.email) {
        if (analytics) {
          analytics.setUserId(user.email);
          analytics.setUserProperties({
            email: user.email,
            name: user.name,
          });
        }
        setLuckyOrangeIdentity(user, 0);
      }
    }
  } catch (e) {
    console.log("ANALYTICS ERROR", e);
  }
};

/**
 * @desc track activity in analytics
 */
export const trackAnalyticActivity = (name, params) => {
  try {
    if (process.browser) {
      if (isDev()) {
        console.log("trackActivity :", name, params);
        return;
      }
      if (analytics) analytics.logEvent(name, params);
      if (window.Intercom) window.Intercom("trackEvent", name, params);
      if (window?.LO?.events?.track) {
        window.LO.events.track(name, params);
      }
      if (window.fbq) {
        window.fbq("trackCustom", name, params);
      }
    }
  } catch (e) {
    console.log("ANALYTICS ERROR", e);
  }
};

/**
 * @desc open intercom chat
 */
export const openIntercomChat = () => {
  try {
    window.Intercom("showNewMessage");
  } catch (e) {
    console.log("ANALYTICS ERROR", e);
  }
};

/**
 * @desc hide intercom launcher
 */
export const hideIntercomLauncher = () => {
  try {
    window.Intercom("update", {
      hide_default_launcher: true,
    });
  } catch (e) {
    console.log("ANALYTICS ERROR at hideIntercomChat", e);
  }
};

const setLuckyOrangeIdentity = (user, count) => {
  if (!user || count >= 10) return;

  if (window?.LO?.visitor?.identify) {
    window.LO.visitor.identify(user.id, { email: user.email });
  } else {
    setTimeout(() => {
      setLuckyOrangeIdentity(user, (count += 1));
    }, 1000);
  }
};
