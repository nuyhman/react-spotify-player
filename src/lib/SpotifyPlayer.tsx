import useSpotifyPlayer from './useSpotifyPlayer';
import { DIMENSIONS } from './constants';
import type { SpotifyPlayer } from './types';

type SpotifyPlayerProps = SpotifyPlayer & Omit<React.ComponentProps<'div'>, 'children'>;

/**
 * ### Spotify Player
 *
 * The SpotifyPlayer component is a wrapper around the Spotify oEmbed API. It fetches the Spotify content and renders an iframe with the Spotify player.
 *
 * props:
 * - `resourceId` - Spotify resource ID
 * - `size` - Size of the player
 * - `theme` - Theme of the player
 * - `children` - Render props with `spotify` and `isLoading`
 *
 *
 * Learn More:
 * - https://developer.spotify.com/documentation/embeds
 *
 */
const SpotifyPlayer = ({ resourceId, size = 'default', theme = 'light', children, ...rest }: SpotifyPlayerProps) => {
  const { spotify, isLoading, renderPlayer } = useSpotifyPlayer({ resourceId, theme, size });

  if (!spotify) return null;

  return (
    <div
      id="spotify-player"
      style={{
        position: 'relative',
        borderRadius: 12,
        width: DIMENSIONS[size].width,
        height: DIMENSIONS[size].height,
      }}
      {...rest}
    >
      {renderPlayer()}
      {typeof children === 'function' ? children({ spotify, isLoading }) : children}
    </div>
  );
};

export default SpotifyPlayer;
