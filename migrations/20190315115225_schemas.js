exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('customers', customers => {
      customers.increments('id').primary();
      customers
        .text('name')
        .unique()
        .notNullable();
    })
    .createTable('orders', orders => {
      orders.increments('order_id').primary();
      orders.text('date').notNullable();
      orders.text('checkorcash').notNullable();
      orders.text('amount').notNullable();
      orders.integer('customer_id').references('customers.id');
    })
    .createTable('expenseType', expenseType => {
      expenseType.increments('id').primary();
      expenseType
        .text('name')
        .unique()
        .notNullable();
    })
    .createTable('expenses', expenses => {
      expenses.increments('expense_id').primary();
      expenses.text('date').notNullable();
      expenses.text('reason').notNullable();
      expenses.text('amount').notNullable();
      expenses.integer('expenseType_id').references('expenseType.id');
    });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('customers'),
    knex.schema.dropTableIfExists('invoices'),
    knex.schema.dropTableIfExists('expenseTypes'),
    knex.schema.dropTableIfExists('expenses')
  ]);
};
