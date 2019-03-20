exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers')
    .del()
    .then(function() {
      const customers = [
        { id: 1, name: 'Jimmy' },
        { id: 2, name: 'Santana' },
        { id: 3, name: 'Bob' }
      ];
      return knex('customers').insert(customers);
    });
};
