interface MockWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<any>) => void
  postMessage: {
    (message: any, transfer: Transferable[]): void
    (message: any, options?: StructuredSerializeOptions): void
  }
}

const ctx: MockWorker = self as any
ctx.onmessage = (cmd: any) => console.log(cmd)
export {}
