import clsx from "clsx";
import css from "../TransactionHistory/TransactionHistory.module.css/";

const TransactionHistory = ({ items }) => {
  const updatedItems = items.map((item) => ({
    ...item,
    type: item.type
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }));

  return (
    <>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.title}>
            <th className={css.titleItem}>Type</th>
            <th className={css.titleItem}>Amount</th>
            <th className={css.titleItem}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {updatedItems.map((item, index) => (
            <tr
              key={item.id}
              className={clsx(
                css.item,
                index % 2 === 1 ? css.darkgrey : css.white
              )}
            >
              <td className={css.itemAmmo}>{item.type}</td>
              <td className={css.itemAmmo}>{item.amount}</td>
              <td className={css.itemAmmo}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
