import { fromEvent, map, type Observable } from 'rxjs'

export interface Commuter<WM, CM> {
  messages$: Observable<WM>
  postMessage: (m: CM) => void
}

function workerCommuterFactory<WM = any, CM = any>(
  worker: Worker
): Commuter<WM, CM> {
  return {
    messages$: fromEvent<MessageEvent<WM>>(worker, 'message').pipe(
      map((e) => e.data)
    ),
    postMessage: (m: CM) => worker.postMessage(m)
  }
}

export default workerCommuterFactory
