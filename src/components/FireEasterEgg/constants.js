/**
 * constants.js — shared tunables of the fire easter egg.
 *
 * Lives in its own module so FireContext and GameOverScreen can both use
 * GAMEOVER_HOLD_MS without a circular import (FireContext renders
 * GameOverScreen, so GameOverScreen must not import FireContext values at
 * module-evaluation time).
 */

/** How long the game-over verdict stays on screen before the site rebuilds. */
export const GAMEOVER_HOLD_MS = 20000;

/** Fade-to-black duration of the game-over overlay (matches fire.css). */
export const GAMEOVER_FADE_MS = 1200;
