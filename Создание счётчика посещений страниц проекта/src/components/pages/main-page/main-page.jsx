import React, {useEffect} from 'react';
import About from '/src/components/blocks/about/about';
import FeaturesList from '/src/components/blocks/features-list/features-list';
import {textToUser} from '/src/const';
import {SingletonCounterService} from '/src/services/counter.service';

const singletonCounterService = new SingletonCounterService();

function MainPage({features}) {
  const page = 'Main';

  useEffect(() => {
    singletonCounterService.incSingleton(page);
  }, []);

  return (
    <>
      {singletonCounterService.getSingleton(page) > 5 && <h2>{textToUser}</h2>}
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
