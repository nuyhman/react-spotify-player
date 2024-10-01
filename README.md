# React Spotify Player

A React component for embedding Spotify content using the Spotify oEmbed API.

[Live Demo](https://react-spotify-player-demo.vercel.app/)

![Demo Screenshot](/public/demo.png)

## Features

- **Easy Integration**: `SpotifyPlayer` component is designed to be easily integrated into any React application
- **Customizable**: Adjust the `size` and `theme` of the player to match your application's design.
- **Render Prop Support**: Utilize the render prop pattern to access the `spotify` object and `loading` state directly within your component, enabling dynamic content updates.
- **TypeScript**: Fully typed with TypeScript for better DX and type safety.

## Installation

Yarn

```bash
yarn add @nuyhman/react-spotify-player
```

npm

```bash
npm i @nuyhman/react-spotify-player
```

## Usage

```tsx
import React from 'react';
import SpotifyPlayer from '@nuyhman/react-spotify-player';

const App = () => {
  return <SpotifyPlayer resourceId="track/6y0igZArWVi6Iz0rj35c1Y" />;
};

export default App;
```

Simply add the SpotifyPlayer component with a `resourceId` prop to the React application using JSX.

The player’s width will scale to fit the parent container.

## **Props**

### resourceId

This `resourceId` property is used to fetch and display the corresponding Spotify content.

- **Supported**: `track`, `album`, `artist`, `playlist`, `episode`, `show`
- **Example**: `track/6y0igZArWVi6Iz0rj35c1Y`

### size (optional)

Defined according to the three heights supported by Spotify Player.

- **Default**: `'default'`
- **Supported Values**: `'small'` `'default'` `'large'`

### theme (optional)

The visual theme for the player.

- **Default**: `'light'`
- **Supported Values**: `'light'`, `'dark'`

### children (optional)

A render prop that allows you to customize the rendering of children based on the current state.

- **Render Props**: `{ spotify, isLoading }`
- **Example**:

```tsx
<SpotifyPlayer resourceId="track/1yFeci9dMqBobDPGJroWAZ">
  {({ isLoading, spotify }) => (
    <>
      {isLoading && (
        <div className="absolute inset-0 size-full rounded-xl">
          <img src={spotify?.thumbnail_url} alt={spotify?.title} className="blur" />
        </div>
      )}
    </>
  )}
</SpotifyPlayer>
```
