const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const getAllCustomers = () => {
  return knex('customers');
};

// const getAllOrders = () => {
//   return knex('orders');
// };

// const getCustomerOrders = () => {
//   return knex.raw('SELECT customers.name,foods.item_unit,
//     company.company_name, company.company_city
//     FROM foods ,company
//     WHERE  foods.company_id =company.company_id
//     AND company.company_city='London';)

// };

const customers = getAllCustomers();
//const orders = getAllOrders();
//const customerOrders = getCustomerOrders();

/* GET home page. path starts with /home */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/customers/all', (req, res) => {
  knex('customers')
    .select()
    .then(customers => {
      res.render('all', { customers: customers });
    });
});

const respondAndRenderCustomer = (id, res, viewName) => {
  if (typeof id != 'undefined') {
    knex('customers')
      .select()
      .where('id', id)
      .first()
      .then(customer => {
        res.render(viewName, customer);
        return knex('orders')
          .select()
          .where('customer_id', id)
          .then(orders => {
            customer[id].orders = orders;
          });
      });
  } else {
    res.status(500).render('error', { message: 'invalid id' });
  }
};

// const respondAndRenderCustomer = (id, res, viewName) => {
//   if (typeof id != 'undefined') {
//     knex('orders')
//       .select()
//       .where('customer_id', id)
//       .then(orders => {
//         customer[id].orders = orders;
//         knex('customers')
//           .select()
//           .where('id', id)
//           .first()
//           .then(customer => {
//             res.render(viewName, customer);
//             return;
//           });
//       });
//   } else {
//     res.status(500).render('error', { message: 'invalid id' });
//   }
// };

router.get('/customers/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderCustomer(id, res, 'singleCustomer');
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/customers/:id/edit', (req, res) => {
  const id = req.params.id;
  respondAndRenderCustomer(id, res, 'edit');
});

// router.post('/', (req, res) => {
//   knex('customers')
//     .insert(customer, 'id')
//     .then(ids => {
//       const id = ids[0];
//       res.redirect(`/customers/${id}`);
//     });
// });

// router.put('/:id', (req, res) => {
//   knex('customers')
//     .where('id', req.params.id)
//     .update(customer, 'id')
//     .then(() => {
//       res.redirect(`/customers/${req.params.id}`);
//     });
// });

// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   knex('customers')
//     .where('id', id)
//     .del()
//     .then(customer => {
//       res.redirect('/customers/all');
//     });
// });

module.exports = router;
