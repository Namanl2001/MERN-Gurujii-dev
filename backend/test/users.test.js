const chai = require('chai');
const request = require('supertest');
let User = require('../models/user.model');
const app = require('../server.js');
const expect = chai.expect;
describe('User routes', () => {
  var id = '';
  const data = {
    email: 'test@gmail.com',
    title: 'tutor',
    userName: 'test',
    subject: 'maths',
    tutor: 'tutor',
    coachingName: 'coaching',
    qualification: 'phd',
    about: 'about',
    c1: 9,
    c2: 10,
    c3: 11,
    c4: 12,
    address: 'address',
    city: 'city',
    pin: 500007,
    phone: 9876543210,
    isAdmin: true,
  };
  before(async () => {
    const user = await User.create({
      ...data,
      class1: 9,
      coaching: 'coaching',
      username: 'test',
    });
    id = user._id;
  });
  after(async () => {
    await User.deleteMany({});
  });

  it('should add a user', async () => {
    const response = await request(app)
      .post('/users/add')
      .set('content-type', 'application/json')
      .send(JSON.stringify(data));
    expect(response.status).to.equal(200);
    expect(response.body).to.equal('profile added');
  });

  it('should fetch user by email', async () => {
    const response = await request(app).get('/users/test@gmail.com');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
  });

  it('should return all users', async () => {
    const response = await request(app).get('/users');
    expect(response.body).to.be.an('array');
    expect(response.status).to.equal(200);
  });

  it('should update user by id', async () => {
    const response = await await request(app)
      .post(`/users/update/${id}`)
      .set('content-type', 'application/json')
      .send({ ...data, username: 'test2' });
    expect(response.status).to.equal(200);
    expect(response.body).to.equal('Exercise updated!');
  });

  it('should update user popularity by id', async () => {
    const response = await await request(app)
      .post(`/users/updatePopularity/${id}`)
      .set('content-type', 'application/json')
      .send({ ...data, popularity: 1 });
    expect(response.status).to.equal(200);
    expect(response.body).to.equal('Popularity updated!');
  });

  it('should delete user by id', async () => {
    const response = await await request(app).delete(`/users/delete/${id}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.equal('Profile deleted.');
  });
});
