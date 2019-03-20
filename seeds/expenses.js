exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('expenses').insert([
        {
          expense_id: 1,
          date: 'today',
          reason: 'test',
          amount: '$1',
          expenseType_id: 1
        },
        {
          expense_id: 2,
          date: 'today',
          reason: 'test2',
          amount: '$2',
          expenseType_id: 2
        },
        {
          expense_id: 3,
          date: 'today',
          reason: 'test3',
          amount: '$3',
          expenseType_id: 3
        }
      ]);
    });
};
