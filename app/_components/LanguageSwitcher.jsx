"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    const pathWithoutLang = pathname.replace(/^\/(ar|en)/, "");
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <button onClick={changeLanguage} className="btn btn-outline-secondary ms-2">
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
}
