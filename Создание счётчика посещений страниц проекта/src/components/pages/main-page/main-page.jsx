import React, { useEffect } from "react";
import About from "components/blocks/about/about";
import FeaturesList from "components/blocks/features-list/features-list";
import { SingletonCounterService } from "services/counter.service";
import { textToUser } from "const";
import { BuilderPages } from "components/builders/builder-pages/builder-pages";
import TimeServices from "components/ui/time-services/time-services";

const singletonCounterService = new SingletonCounterService();

function MainPage({ features }) {
  const page = "Main";

  useEffect(() => {
    singletonCounterService.incSingleton(page);
  }, []);

  return BuilderPages.setPromo(
    "Внимание! Акция! Подробности по телефону 8 900000000"
  ).renderForm((text) => (
    <>
      <TimeServices />
      {singletonCounterService.getSingleton(page) > 5 && <h2>{textToUser}</h2>}
      {text}
      <About />
      <FeaturesList features={features} />
    </>
  ));
}

export default MainPage;
