import format from 'date-fns/esm/format'
import formatTz from 'date-fns-tz/esm/format'
import formatDistance from 'date-fns/esm/formatDistance'
import utcToZonedTime from 'date-fns-tz/esm/utcToZonedTime'

export function formatDatetime(datetime: Date, tz: string, fmt: string) {
  const zonedDatetime = utcToZonedTime(datetime, tz)
  return formatTz(zonedDatetime, fmt, { timeZone: tz })
}

// Number of milliseconds since 2020
const RESPLICE_EPOCH = 1577836800 * 1000

export function respliceDatetimeToDatetime(datetime: number) {
  const ms = datetime * 1000
  return new Date(RESPLICE_EPOCH + ms)
}

export function datetimeToRespliceDatetime(datetime: Date): number {
  return (datetime.getTime() - RESPLICE_EPOCH) / 1000
}

export function getRespliceNow() {
  return datetimeToRespliceDatetime(new Date())
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
  return formatDatetime(dt, timezone, fmt)
}

export function formatRespliceDatetimeDistance(start: number, end: number) {
  const startDt = respliceDatetimeToDatetime(start)
  const endDt = respliceDatetimeToDatetime(end)
  return formatDistance(endDt, startDt)
}
