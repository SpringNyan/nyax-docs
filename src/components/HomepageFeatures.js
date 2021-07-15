import clsx from "clsx";
import React from "react";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "完善的 TypeScript 支持",
    description: (
      <>
        Nyax 提供开箱即用的 TypeScript
        支持，你可以获得完善的类型推导和自动提示。
      </>
    ),
  },
  {
    title: "基于类的应用模块化",
    description: (
      <>
        Nyax 通过类定义组成应用的多个模块，你可以注册单个模块的一个或多个容器。
      </>
    ),
  },
  {
    title: "集成多种状态管理库",
    description: (
      <>
        Nyax 支持与 MobX, Redux 和 Vuex 集成，你可以自由选择喜欢的状态管理库。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
