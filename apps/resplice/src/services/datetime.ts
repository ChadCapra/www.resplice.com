import format from 'date-fns/esm/format'
import formatInTimeZone from 'date-fns-tz/esm/formatInTimeZone'

// TODO: Get correct seconds from 1970 - 2000?
const RESPLICE_EPOCH = 946684800 * 1000

export function respliceDatetimeToDatetime(datetime: number) {
  const ms = datetime * 1000
  return new Date(RESPLICE_EPOCH + ms)
}

export function formatRespliceDatetime(datetime: number, fmt: string) {
  const dt = respliceDatetimeToDatetime(datetime)
  return format(dt, fmt)
}

export function formatRespliceDatetimeInTimezone(
  datetime: number,
  timezone: string,
  fmt: string
) {
  const dt = respliceDatetimeToDatetime(datetime)
  return formatInTimeZone(dt, timezone, fmt)
}
