import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Age preventivamente',
    Svg: require('@site/static/img/undraw_medical_care_movn.svg').default,
    description: (
      <> 
    A Vigilância Epidemiológica identifica as doenças antes que causem grandes estragos.
      </>
    ),
  },
  {
    title: 'Super-herói invisível',
    Svg: require('@site/static/img/undraw_super_woman_dv-0-y.svg').default,
    description: (
      <>
    Monitora padrões de doenças, identifica surtos, e ajuda a criar estratégias 
    para impedir que a saúde da cidade fique doente.
      </>
    ),
  },
  {
    title: 'Proteção',
    Svg: require('@site/static/img/undraw_security_on_re_e491.svg').default,
    description: (
      <>
    É como o escudo protetor, possibilitando 
    que todos possam viver com mais saúde e tranquilidade.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
