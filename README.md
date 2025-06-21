# RandomContent Jellyfin Plugin

Version 1.0.0 (targeting Jellyfin 10.9)

RandomContent adds a button next to the search icon in Jellyfin. Clicking the button opens a random movie or series from your library.

## Features

- "Random" button appears beside the search icon
- Selects from movies and series using the Jellyfin API
- Built for Jellyfin 10.9 or later

## Building from source

```bash
dotnet publish Jellyfin.Plugin.RandomContent.sln -c Release
```

This will create the plugin in `Jellyfin.Plugin.RandomContent/bin/Release/net8.0/publish/`.

## Installation

1. Build the plugin as described above or download a prebuilt release.
2. Place the resulting `.dll` or `.zip` in Jellyfin's `plugins` directory.
3. Restart Jellyfin and enable the plugin from the dashboard.

## Usage

After installation you will see a new icon next to the search button in the web interface. Press it to open a random title from your library.

## License

RandomContent is released under the [GNU General Public License v3.0](LICENSE).
