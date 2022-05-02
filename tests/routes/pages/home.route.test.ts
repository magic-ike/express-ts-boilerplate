import request from 'supertest';
// @ts-ignore
import app from '../../../dist/app';
import { GREETING } from '../../../src/controllers/pages/home.controller';

describe('GET /', () => {
  describe('a successful response', () => {
    let response: request.Response;

    beforeAll(async () => {
      response = await request(app).get('/');
    });

    it('should have a 200 status code', () => {
      expect(response.statusCode).toBe(200);
    });

    it('should specify html in the content type header', () => {
      expect(response.headers['content-type']).toContain('html');
    });

    it('should contain the greeting', () => {
      expect(response.text).toContain(GREETING);
    });
  });
});
