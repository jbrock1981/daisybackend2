exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('orders').insert([
        {
          order_id: 1,
          date: 'today',
          checkorcash: 'cash',
          amount: '$1',
          customer_id: 1
        },
        {
          order_id: 2,
          date: 'today',
          checkorcash: 'cash',
          amount: '$2',
          customer_id: 2
        },
        {
          order_id: 3,
          date: 'today',
          checkorcash: 'cash',
          amount: '$3',
          customer_id: 3
        }
      ]);
    });
};
