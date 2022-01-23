select
    strftime('%Y', a.ordered_at) as year,
    strftime('%m', a.ordered_at) as Month,
    a.customer_id,
    max(total_order_value)
from
    (
        select
            orders.customer_id,
            orders.ordered_at,
            orders.order_id,
            sum(
                order_line_items.quantity * order_line_items.unit_price
            ) as total_order_value
        from
            orders
            join order_line_items on orders.order_id = order_line_items.order_id
        group by
            orders.order_id
    ) a
group by
    strftime('%m-%Y', a.ordered_at)