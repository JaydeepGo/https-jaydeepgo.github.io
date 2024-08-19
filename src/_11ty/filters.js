import { DateTime } from "luxon";

export default {
  htmlDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  },
  postDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("cccc, dd LLL, yyyy");
  },
  imagePath: (imageName) => {
    return "/images/" + imageName;
  },
};
