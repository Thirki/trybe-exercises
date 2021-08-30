const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Complete a função customerInfo() para que seu retorno seja similar a 
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416,
  // R. Rua das Flores, Nº: 389, AP: 701".
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apn = order.address.apartment;
  // ${}
  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apn}`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);