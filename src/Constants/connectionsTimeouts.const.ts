export enum ConnectionsTimeoutNameEnumType {
  standard = 'standard',
  metaData = 'metaData',
  transcript = 'transcript',
  transcriptChunkToSummary = 'transcriptChunkToSummary',
  summaryChunkToQuestions = 'summaryChunkToQuestions',
  summaryChunkToObjections = 'summaryChunkToObjections',
}

export const connectionsTimeouts: Record<
  ConnectionsTimeoutNameEnumType,
  number
> = {
  standard: 5000,
  metaData: 5000,
  transcript: 5000,
  transcriptChunkToSummary: 60000,
  summaryChunkToQuestions: 90000,
  summaryChunkToObjections: 90000,
}
