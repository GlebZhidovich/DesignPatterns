import FeatureCard from "../feature-card/feature-card";
import { Owner, Text } from "../feature-card/styles";
import ShopFeatureCard from "../shop-feature-card/shop-feature-card";
import Title, { TitleSize } from "../title/title";

export const AbstractFactory = {
  title: null,
  factoryTitle(props) {
    switch (props.owner) {
      case "Магазинные продукты":
        this.title = props.title + " из магазина";
        break;
      case "Фермерские продукты":
        this.title = props.title + " с фермы";
        break;
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
        return (
          <FeatureCard
            {...props}
            title={this.title}
            Title={() => (
              <Title as="h3" size={TitleSize.EXTRA_SMALL}>
                {this.title}
              </Title>
            )}
            Owner={() => (
              <Owner isNegative={props.isNegative}>{props.owner}</Owner>
            )}
            About={() => (
              <Text dangerouslySetInnerHTML={{ __html: props.about }} />
            )}
          />
        );
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
