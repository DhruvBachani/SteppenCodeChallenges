select
    a.year,
    a.month,
    min(a.customer_id) as customer_id,
    max(a.total_order_value) as total_monthly_order_value
from
    (
        select
            orders.customer_id,
            date_part('month', orders.ordered_at) as month,
            date_part('year', orders.ordered_at) as year,
            sum(
                order_line_items.unit_price * order_line_items.quantity
            ) as total_order_value
        from
            orders
            join order_line_items on orders.order_id = order_line_items.order_id
        group by
            orders.customer_id,
            orders.order_id
        order by
            month
    ) a
group by
    year,
    month