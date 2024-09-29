export type PlayerEmbedType = 'artist' | 'album' | 'track' | 'playlist' | 'show' | 'episode';

export type ResourceId = `${PlayerEmbedType}/${string}`;

export enum ThemeEnum {
  dark = '0',
  light = '1',
}

export type Theme = keyof typeof ThemeEnum;

export type DimensionSize = 'small' | 'default' | 'large';

export interface Dimension {
  width: string | number;
  height: number;
}

/**
 * Spotify Player oEmbed Data
 *
 * @see https://developer.spotify.com/documentation/embeds/reference/oembed
 */
export type SpotifyOEmbed = Partial<{
  height: number;
  html: string;
  iframe_url: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;
  type: string;
  version: string;
  width: number;
}>;

export interface SpotifyPlayer {
  /**
   * Spotify resource ID
   * e.g. `track/6y0igZArWVi6Iz0rj35c1Y`
   *
   * @supported: `track`, `album`, `artist`, `playlist`, `episode`, `show`
   */
  resourceId: ResourceId;
  /**
   * Size of the player
   *
   * @defaultValue: `'default'`
   */
  size?: DimensionSize;
  /**
   * Theme of the player
   *
   * defaultValue: `'light'`
   */
  theme?: Theme;
  /**
   * Render prop for children
   *
   * supported: `spotifyContent`, `isLoading`
   *
   * ```tsx
   * { spotify, isLoading } => <p>{isLoading ? 'Loading...' : spotify.title}</p>
   * ```
   */
  children?: React.ReactNode | ((props: { spotify: SpotifyOEmbed; isLoading: boolean }) => React.ReactNode);
}
