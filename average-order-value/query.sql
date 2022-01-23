select
	customers.name,
	count(*) as num_orders,
	sum(a.total_order_value) as total_order_value,
	floor(avg(a.total_order_value)) as avg_order_value
from
	customers
	join (
		select
			orders.customer_id,
			orders.order_id,
			sum(
				order_line_items.quantity * order_line_items.unit_price
			) as total_order_value
		from
			orders
			join order_line_items on orders.order_id = order_line_items.order_id
		group by
			orders.order_id
	) a on customers.customer_id = a.customer_id
group by
	customers.customer_id
order by
	avg_order_value desc;