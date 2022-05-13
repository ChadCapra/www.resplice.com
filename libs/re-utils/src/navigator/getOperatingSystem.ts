/* eslint-disable @typescript-eslint/no-explicit-any */
export type OS = 'Android' | 'iOS' | 'Linux' | 'MacOS' | 'Windows' | 'unknown'
export function getOperatingSystem(): OS {
  // Use new userAgentData if possible
  // TODO: Remove any type when lib.dom is updated
  if (
    (navigator as any).userAgentData &&
    (navigator as any).userAgentData.platform
  ) {
    return (navigator as any).userAgentData.platform
  }

  if (navigator.platform) {
    switch (navigator.platform) {
      case 'Win32':
      case 'Win64':
        return 'Windows'
      case 'MacIntel':
        return 'MacOS'
      case 'Linux x86_64':
        return 'Linux'
    }
  }

  // Fallback to userAgent parsing
  // This code may be missing some edge cases
  const userAgent = navigator.userAgent || navigator.vendor

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows'
  }

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return 'iOS'
  }

  return 'unknown'
}
