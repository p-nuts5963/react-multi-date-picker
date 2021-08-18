import React from "react";
import Layout from "../components/layout/layout";
import doc from "../docs/calendars";

export default function Calendars({ pageContext }) {
  const language = pageContext.language || "en";

  return <Layout language={language} doc={doc} />;
}