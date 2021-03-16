export {};
const supertest = require(`supertest`);
const assert = require(`assert`);
const server = require(`../index`);

describe(`Services test`, () => {
  it(`it should has status code 200`, (done) => {
    supertest(server)
      .get(`/`)
      .expect(200)
      .end((err: Error) => {
        if (err) done(err);
        done();
      });
  });

  it(`it should has status code 200 fir api services`, (done) => {
    supertest(server)
      .get(`/api/service`)
      .expect(`Content-Type`, /json/)
      .expect(200)
      .end((err: Error) => {
        if (err) done(err);
        done();
      });
  });

  it(`responds with json for creating `, (done) => {
    supertest(server)
      .post(`/api/service`)
      .send({ name: `john` })
      .set(`Accept`, `application/json`)
      .expect(201)
      .end((err: Error) => {
        if (err) return done(err);
        return done();
      });
  });

  it(`should create new service"`, (done) => {
    supertest(server)
      .post(`/api/service`)
      .send(`email=john`) // x-www-form-urlencoded upload
      .set(`Accept`, `application/json`)
      .expect((res: Response | any) => {
        res.body.email = `john`;
      })
      .expect(
        201,
        {
          email: `john`,
        },
        done,
      );
  });

  it(`should get all service options"`, (done) => {
    supertest(server)
      .get(`/api/serviceOptions`)
      .send(`email=john`) // x-www-form-urlencoded upload
      .set(`Accept`, `application/json`)
      .expect((res: Response | any) => {
        const options = res.body;
        assert(res.body, options);
      })
      .expect(
        200,
        [
          { label: `щоки`, timeToComplete: `3`, id: 1 },
          { label: `вії`, timeToComplete: `1`, id: 2 },
          { label: `брови`, timeToComplete: `2`, id: 3 },
          { label: `насцати`, timeToComplete: `30`, id: 4 },
        ],

        done,
      );
  });
});
