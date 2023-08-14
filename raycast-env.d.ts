/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Obsidian Token - the Obsidian token from the Obsidian rest plugin */
  "token": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `bookmarks` command */
  export type Bookmarks = ExtensionPreferences & {}
  /** Preferences accessible in the `refresh` command */
  export type Refresh = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `bookmarks` command */
  export type Bookmarks = {}
  /** Arguments passed to the `refresh` command */
  export type Refresh = {}
}
