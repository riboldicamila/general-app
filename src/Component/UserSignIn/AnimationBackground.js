import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "./styles.module.css";

export default function AnimationBackground() {
  const springStyles = useSpring({
    from: { background: "var(--step0)" },
    to: [
      { background: "var(--step1)" },
      { background: "var(--step2)" },
      { background: "var(--step3)" },
      { background: "var(--step4)" },
      { background: "var(--step0)" },
    ],
    config: config.molasses,
    loop: { reverse: true },
  });

  return (
    <div className={styles.container}>
      <div className={styles.squares}>
        <div className={styles.block} />
        <div className={styles.block} />
        <animated.div className={styles.block} style={springStyles} />
      </div>
      <animated.div className={styles.background} style={springStyles} />
    </div>
  );
}
