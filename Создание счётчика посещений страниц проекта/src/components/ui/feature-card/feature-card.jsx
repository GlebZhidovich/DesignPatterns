import React from "react";
import { Feature, Image, Header } from "./styles";

// Карточка
function FeatureCard({
  Title,
  About,
  Owner, // владелец особенности (обычный магазин, фермерский)
  title, // название особенности
  isNegative, // является ли особенность отрицательной
  image, // иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <About />
      <hr />
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner />
          <Title />
        </div>
      </Header>
    </Feature>
  );
}

export default FeatureCard;
