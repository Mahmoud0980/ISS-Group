"use client";

import "./NewsSection.css";
import { useTranslations } from "next-intl";

export default function NewsTimeline() {
  const t = useTranslations("news");

  const news = t.raw("items");

  return (
    <section className="timeline-section py-5" id="news">
      <div className="container">
        <h2 className="text-center mb-5 display-5">{t("title")}</h2>
        <div className="timeline-wrapper">
          <div className="timeline-horizontal">
            {news.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-inner">
                  <div className="timeline-front">{item.title}</div>
                  <div className="timeline-back">
                    <span className="timeline-date">{item.date}</span>
                    <p className="timeline-summary">{item.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
