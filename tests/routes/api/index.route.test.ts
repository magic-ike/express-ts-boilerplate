import request from 'supertest';
// @ts-ignore
import app from '../../../dist/app';
import { API_ROUTER_CONFIRMATION } from '../../../src/routes/api/index.route';

describe('GET /api', () => {
  describe('a successful response', () => {
    let response: request.Response;

    beforeAll(async () => {
      response = await request(app).get('/api');
    });

    it('should have a 200 status code', () => {
      expect(response.statusCode).toBe(200);
    });

    it('should specify json in the content type header', () => {
      expect(response.headers['content-type']).toContain('json');
    });

    it('should contain the confirmation', () => {
      expect(response.text).toContain(API_ROUTER_CONFIRMATION);
    });
  });
});
