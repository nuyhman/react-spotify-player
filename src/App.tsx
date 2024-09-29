import SpotifyPlayer from './lib/SpotifyPlayer';

function App() {
  return (
    <div
      style={{
        maxWidth: 800,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        gap: 16,
      }}
    >
      <SpotifyPlayer resourceId="track/1wUnuiXMMvhudmzvcCtlZP" size="small" />
      <SpotifyPlayer resourceId="playlist/37i9dQZF1DWVGwK1DVdGDJ" size="small" />
      <SpotifyPlayer resourceId="episode/0MHZ3SaEdpEorHuS0dUC6H" size="small" />
      <SpotifyPlayer resourceId="show/0IVuxvvUqzLf8mWONnTCsC" size="large" />

      <SpotifyPlayer resourceId="album/1HMLpmZAnNyl9pxvOnTovV" />

      <SpotifyPlayer resourceId="artist/6HvZYsbFfjnjFrWF950C9d" size="large">
        {({ isLoading }) => (
          <>
            {isLoading && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'blue',
                  borderRadius: 12,
                }}
              >
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: 'white',
                  }}
                >
                  Loading Spotify content...
                </p>
              </div>
            )}
          </>
        )}
      </SpotifyPlayer>
    </div>
  );
}

export default App;
