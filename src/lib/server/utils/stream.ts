'use server'
import stream from 'stream'

export async function createStreamResponse(promises: Promise<unknown>[]): Promise<stream.PassThrough> {
    const responseStream = new stream.PassThrough()

    Promise.all(
        promises.map(async promise => {
            const result = await promise

            // Process the result and write it to the stream
            responseStream.write(JSON.stringify(result) + '\n')
        })
    )
        .then(() => {
            // Signal the end of the stream
            responseStream.end()
        })
        .catch(err => {
            // Handle errors and emit them to the stream
            responseStream.emit('error', err)
        })

    return responseStream
}
