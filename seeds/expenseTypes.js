exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenseType')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('expenseType').insert([
        { id: 1, name: 'type1' },
        { id: 2, name: 'type2' },
        { id: 3, name: 'type3' }
      ]);
    });
};
