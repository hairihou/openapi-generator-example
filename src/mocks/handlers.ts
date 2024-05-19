import { http, HttpResponse } from 'msw';
import { type Pet } from 'petstore-models';

const petApiBaseUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  /**
   * GET: /pet/:petId
   */
  http.get(`${petApiBaseUrl}/pet/:petId`, ({ params }) => {
    const { petId } = params;

    if (typeof petId !== 'string') {
      return HttpResponse.error();
    }

    return HttpResponse.json({
      id: parseInt(petId, 10),
      name: `Dog${petId}`,
      photoUrls: [],
    } satisfies Pet);
  }),

  /**
   * POST: /pet
   */
  http.post(`${petApiBaseUrl}/pet`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      ...(body as Pet),
      id: (body as Pet).id,
    });
  }),
];
