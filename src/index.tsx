import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer, Model } from 'miragejs';
import { App } from './App';

// createServer({
//   models: {
//     transaction: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       transactions: [
//         {
//           id: 1,
//           title: 'Venda de carro',
//           type: 'deposit',
//           category: 'Venda',
//           amount: 33000,
//           createdAt: new Date()
//         },
//         {
//           id: 2,
//           title: 'Compra de pc',
//           type: 'withdraw',
//           category: 'Pc',
//           amount: 3500,
//           createdAt: new Date()
//         }
//       ]
//     })
//   },

//   routes() {
//     this.namespace = 'api';

//     this.get('/transactions', () => {
//       return this.schema.all('transaction')
//     })

//     this.post('/transactions', (schema, request) => {
//       const data = JSON.parse(request.requestBody)

//       return schema.create('transaction', data)
//     })
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
