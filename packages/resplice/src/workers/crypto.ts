const ctx: Worker = self as any

ctx.onmessage = (message) => {
  console.log(message)
}

// I export an empty object to satisfy the isolated modules TS requirement.
export {}
