import FeatureCard from '../feature-card/feature-card';
import ShopFeatureCard from '../shop-feature-card/shop-feature-card';

export default function FactoryFeatureCard(props) {
  switch (props.owner) {
    case 'Магазинные продукты':
      return <ShopFeatureCard {...props} />;
    default:
      return <FeatureCard {...props} />;
  }
}
