const serviceController = require('./db/controllers/service');


export default function handler(req, res) {

 const results = serviceController.list();

 console.log(results)

  res.status(200).json({ name: 'John Doe' })
}
