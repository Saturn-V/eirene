import styles from './index.module.scss';

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum Shape {
  Square = 'Square',
  Rectangle = 'Rectangle',
}

interface Props {
  size: Size;
  shape: Shape;
  children?: any;
}

export default function Card(props: Props) {
  const { children } = props;
  return <div className={styles.Card}>{children}</div>;
}
