export type ChunksFromTranscriptStringType = {
  chunkCharacters: string[]
  chunkSize: number
  maxSearch: number
}

export const CHUNKS_FROM_TRANSCRIPT_STRING: ChunksFromTranscriptStringType = {
  chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
  chunkSize: 2400,
  maxSearch: 128,
}

export const CHUNKS_FROM_SUMMARY_ARRAY: number = 4
