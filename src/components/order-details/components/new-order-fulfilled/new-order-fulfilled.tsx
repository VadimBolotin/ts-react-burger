import { useAppSelector } from '../../../../services/app/hooks';

import { getCurrentOrderNumber } from '../../../../services/features/order-details/selectors';
import orderAccepted from '../../../../assets/icons/order-accepted.svg';
import styles from './new-order-fulfilled.module.css';

const NewOrderFulfilled = () => {
  const currentOrderNumber = useAppSelector(getCurrentOrderNumber);

  return (
    <>
      <span className={`${styles.order} text text_type_digits-large`}>{currentOrderNumber}</span>
      <h3 className={`${styles.heading} text text_type_main-medium mt-8`}>идентификатор заказа</h3>
      <img
        className={styles.image}
        src={orderAccepted}
        alt="Три фиолетовых круга с белой галочкой в центре"
      />
    </>
  );
};

export default NewOrderFulfilled;
