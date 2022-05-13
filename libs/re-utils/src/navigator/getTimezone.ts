export function getNavigatorTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}
