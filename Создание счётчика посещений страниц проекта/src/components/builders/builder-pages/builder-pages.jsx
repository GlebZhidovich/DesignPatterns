import React from "react";
export const BuilderPages = {
  page: "",
  promoText: "",
  setPromo: (text) => {
    BuilderPages.promoText = text;
    return BuilderPages;
  },
  renderForm: (callback) => {
    return <>{callback(BuilderPages.promoText)}</>;
  },
};
