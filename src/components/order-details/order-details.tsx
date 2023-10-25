import NewOrderPending from './components/new-order-pending/new-order-pending';
import NewOrderFulfilled from './components/new-order-fulfilled/new-order-fulfilled';


import styles from './order-details.module.css';

interface IOrderDetailsProps {
  isPending: boolean;
}

const OrderDetails = ({ isPending }: IOrderDetailsProps) => (
  <div className={`${styles.wrapper} p-30`}>
    {isPending ? <NewOrderPending/> : <NewOrderFulfilled/>}
    <p className={`${styles.paagraph} text text_type_main-default mt-15`}>
      {isPending ? 'Ваш заказ начали готовить' : 'Ваш заказ готов'}
    </p>
    <p className={`${styles.waiting} text text_type_main-default text_color_inactive mt-2`}>
      {isPending ? 'Дождитесь его номера' : 'Приятного аппетита!'}
    </p>
  </div>
)

export default OrderDetails;
