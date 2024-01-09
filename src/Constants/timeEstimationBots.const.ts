export const timeEstimationBots: Record<
  | 'transcriptChunkToSummary'
  | 'summaryChunkToQuestions'
  | 'summaryChunkToObjections',
  number
> = {
  transcriptChunkToSummary: 40000,
  summaryChunkToQuestions: 50000,
  summaryChunkToObjections: 50000,
}
