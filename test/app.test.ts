import { Test } from '@nestjs/testing';

import { ApplicationModule } from '../src/modules/app.module';

describe('App /', () => {
  let app;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    })
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 200 OK', () => {
    return app.inject({
      method: 'GET',
      url: '/'
    }).then(({ statusCode }) => {
      expect(statusCode).toEqual(200);
    });
  });

  it('should return 200 OK', () => {
    return app.inject({
      method: 'GET',
      url: '/echo/hello'
    }).then(({ statusCode }) => {
      expect(statusCode).toEqual(200);
    });
  });

  it('should return 200 OK', () => {
    return app.inject({
      method: 'GET',
      url: '/rate/USD/EUR'
    }).then(({ statusCode }) => {
      expect(statusCode).toEqual(200);
    });
  });

  it('should return 200 OK with uppercase from/to', async () => {
    jest.setTimeout(3000);
    return app.inject({
      method: 'GET',
      url: '/rate/usd/eur'
    }).then(({ payload }) => {
      console.log(payload);
      expect(payload).toContain('USD');
      expect(payload).toContain('EUR');
    });
  });

});
