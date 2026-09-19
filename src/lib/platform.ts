export function getShortcutLabel(fallback = 'Ctrl K'): string {
  if (typeof navigator === 'undefined') return fallback
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? '⌘K' : fallback
}
