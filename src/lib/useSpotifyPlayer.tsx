import { useEffect, useRef, useState } from 'react';
import { ThemeEnum, type SpotifyOEmbed, type SpotifyPlayer } from './types';
import { getSpotifyOEmbed } from './fetch';
import { DIMENSIONS } from './constants';

type useSpotifyPlayer = Omit<SpotifyPlayer, 'children'>;

export default function useSpotifyPlayer({ resourceId, size = 'default', theme = 'light' }: useSpotifyPlayer) {
  const [spotify, setSpotify] = useState<SpotifyOEmbed>();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!resourceId) return;

    const fetchData = async () => {
      try {
        const data = await getSpotifyOEmbed<SpotifyOEmbed>(resourceId);
        setSpotify(data);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      }
    };

    fetchData();
  }, [resourceId]);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const themeParam = `&theme=${ThemeEnum[theme]}`;

    const iframe = iframeRef.current;
    if (iframe && spotify) {
      iframe.src = spotify.iframe_url + themeParam;
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      iframe?.removeEventListener('load', handleLoad);
    };
  }, [spotify, theme]);

  const renderPlayer = () => (
    <iframe
      ref={iframeRef}
      width={DIMENSIONS[size].width}
      height={DIMENSIONS[size].height}
      title={spotify?.title}
      aria-label={spotify?.title}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      style={{
        visibility: isLoading ? 'hidden' : 'visible',
        border: 'none',
        borderRadius: 12,
      }}
    />
  );

  return {
    spotify,
    isLoading,
    renderPlayer,
  };
}
