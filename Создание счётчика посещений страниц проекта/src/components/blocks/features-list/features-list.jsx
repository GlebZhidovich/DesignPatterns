import React from 'react';
import {Features, StyledButton, StyledTitle} from './styles';
import {Li, Ul} from '/src/components/styled';
import FactoryFeatureCard from '/src/components/ui/factory-feature-card/factory-feature-card';
import {AppRoute} from '/src/const';

// список преимуществ
function FeaturesList({
  features, // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return features && features.length ? (
    <Features>
      <StyledTitle as='h2'>Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map(feature => (
          <Li key={feature.id}>
            <FactoryFeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
