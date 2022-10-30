export const adressMock = {
  id: 1,
  type: 'Point',
  coordinates: [-46.57784, -23.64899],
  formattedAddress:
    'Avenida Rudge Ramos, São Bernardo do Campo, São Paulo 09624, 09635, 09636, 09637, 09638, 09639, 09641, 09895, BR',
  city: 'São Bernardo do Campo',
  state: 'São Paulo',
  zipcode: '09624, 09635, 09636, 09637, 09638, 09639, 09641, 09895',
  country: 'BR',
};

export const mockHostel = {
  id: 1,
  name: 'Testing Hostels',
  address: {
    id: 1,
    type: 'Point',
    coordinates: [-46.57784, -23.64899],
    formattedAddress:
      'Avenida Rudge Ramos, São Bernardo do Campo, São Paulo 09624, 09635, 09636, 09637, 09638, 09639, 09641, 09895, BR',
    city: 'São Bernardo do Campo',
    state: 'São Paulo',
    zipcode: '09624, 09635, 09636, 09637, 09638, 09639, 09641, 09895',
    country: 'BR',
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const newHostel = {
  id: 1,
  name: 'Testing Hostels',
  address: 'Avenida Rudge Ramos, São Bernardo do Campo, BRAZIL',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};
