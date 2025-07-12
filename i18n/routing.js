const { defineRouting } = require("next-intl/routing");

const routing = defineRouting({
  // قائمة اللغات المدعومة
  locales: ["en", "ar"], // عدلت de إلى ar لتتناسب مع مشروعك

  // اللغة الافتراضية عند عدم تطابق أي لغة
  defaultLocale: "ar",
});

module.exports = { routing };
