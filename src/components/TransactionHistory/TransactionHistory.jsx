import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.head}>
                <tr>
                    <th className={css.headText}>Type</th>
                    <th className={css.headText}>Amount</th>
                    <th className={css.headText}>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => (
                <tbody className={css.body} key={id}>
                    <tr className={css.bodyItem}>
                        <td className={css.bodyText}>{type}</td>
                        <td className={css.bodyText}>{amount}</td>
                        <td className={css.bodyText}>{currency}</td>
                    </tr>
          </tbody>  ))}
</table>
              );
    
            }
    