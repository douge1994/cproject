module.exports = {
  path: '/user',
  method: 'GET',
  template: {
    id: (params, query, body) =>params.id,
    name: g.name,
    address: {
      zip: g.zipUS,
      city: g.city
    }
  }
}