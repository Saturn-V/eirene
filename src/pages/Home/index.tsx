import moment from 'moment-timezone'

import Card, { Size, Shape } from '../../components/Card';
import Badge from '../../components/Badge';
import CalendarStatic from '../../components/Calendar/Static';
import styles from './index.module.scss'

export default function Home() {
  return (
    <div>
      <h2>{moment().format("MMMM Do, YYYY")}</h2>
      <h2>Welcome, Alex</h2>
      <Card size={Size.Large} shape={Shape.Rectangle}>
        <h4>Expenses</h4>
        <div className={styles.ExpensesHighlights}>
          <h5>$3000 / $3200</h5>
          <Badge>current</Badge>
          <Badge>this period</Badge>
        </div>
        <h6>January 29th - February 12th</h6>
        <CalendarStatic initialDate={moment()}></CalendarStatic>
      </Card>
    </div>
  );
}
