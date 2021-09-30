import type grpc from 'grpc-web'

class EncryptionInterceptor<T, E> implements grpc.UnaryInterceptor<T, E> {
  async intercept(
    request: grpc.Request<T, E>,
    invoker: (request: grpc.Request<T, E>) => Promise<grpc.UnaryResponse<T, E>>
  ): Promise<grpc.UnaryResponse<T, E>> {
    const req = request.getRequestMessage()
    console.log(req)
    const response = await invoker(request)
    console.log(response)
    return response
  }
}

export default EncryptionInterceptor
