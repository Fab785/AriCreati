import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/pexels-jessbaileydesign-1117542.jpg";

export default function HeroSection({ onDiscoverClick }) {
  const { t, i18n } = useTranslation();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        overflow: "hidden",
        borderRadius: "26px",
        marginBottom: "110px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "zoomIn 15s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "40px 20px 60px",
          color: "#000",
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: 1.2,
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "800", textTransform: "uppercase", margin: 0 }}>
          {t("hero.italys_most")}
        </h2>

        <h1
          style={{
            fontSize: "80px",
            margin: "20px 0 10px",
            fontWeight: "900",
            fontFamily: "'Pacifico', cursive",
          }}
        >
          {t("hero.exciting")}
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            textTransform: "uppercase",
            margin: "30px 0 20px",
          }}
        >
          {t("hero.creative_company")}
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 20px",
            fontSize: "18px",
            fontWeight: "400",
            color: "#333",
          }}
        >
          {t("hero.description")}
        </p>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            fontStyle: "italic",
            marginTop: "30px",
          }}
        >
          {t("hero.tagline")}
        </p>

        <button
          onClick={onDiscoverClick}
          style={{
            marginTop: "40px",
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "700",
            backgroundColor: "#A54040",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {t("hero.discover_more")}
        </button>

        {/* Language toggles (optional) */}
        <div style={{ marginTop: 20 }}>
          <button onClick={() => i18n.changeLanguage("it")} style={{ marginRight: 10 }}>
            🇮🇹 Italiano
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
        </div>
      </div>
    </section>
  );
}




