import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  linkToProtocolDocs: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "FTSO",
    Svg: require("@site/static/img/FTSO.svg").default,
    description: (
      <>
        High-integrity, low-latency data feeds for decentralized applications on
        Flare
      </>
    ),
    linkToProtocolDocs: "docs/ftso/overview",
  },
  {
    title: "FDC",
    Svg: require("@site/static/img/DATACONNECTOR.svg").default,
    description: (
      <>
        Verifiable, tamper-proof Web2 and Web3 data for real-world applications
        on Flare
      </>
    ),
    linkToProtocolDocs: "docs/fdc/intro",
  },
  {
    title: "FAssets",
    Svg: require("@site/static/img/FASSETS.svg").default,
    description: (
      <>
        Trust-minimized, decentralized data bridge for connecting Bitcoin to
        Flare
      </>
    ),
    linkToProtocolDocs: "docs/fassets/intro",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  Svg,
  description,
  linkToProtocolDocs,
}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="card margin--sm padding--md">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--primary button--md"
              to={linkToProtocolDocs}
            >
              Protocol Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
