import { ResourceId } from './types';

export const getSpotifyOEmbed = async <T>(resourceId: ResourceId) => {
  const endpoint = 'https://open.spotify.com/oembed';
  const searchParam = `?url=https://open.spotify.com/${resourceId}`;
  const requestUrl = `${endpoint}${searchParam}`;

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json() as Promise<T>;
};
