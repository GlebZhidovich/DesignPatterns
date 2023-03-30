import FeatureCard from "../feature-card/feature-card";
import ShopFeatureCard from "../shop-feature-card/shop-feature-card";

export const AbstractFactory = {
  title: null,
  factoryTitle(props) {
    switch (props.owner) {
      case "Магазинные продукты":
        this.title = props.title + " из магазина";
      case "Фермерские продукты":
        this.title = props.title + " с фермы";
      default:
        this.title = `${props.title}`;
    }
    return this;
  },
  factoryCard(props) {
    switch (props.owner) {
      case "Магазинные продукты":
        return <ShopFeatureCard {...props} title={this.title} />;
      case "Фермерские продукты":
        return <FeatureCard {...props} title={this.title} />;
      default:
        return <FeatureCard {...props} title={this.title} />;
    }
  },
  create(type, props) {
    switch (type) {
      case "title":
        return this.factoryTitle(props);
      case "card":
        return this.factoryCard(props);
      default:
        return this;
    }
  },
};
