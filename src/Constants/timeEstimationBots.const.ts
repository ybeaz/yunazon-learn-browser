export const timeEstimationBots: Record<
  | 'transcriptChunkToSummary'
  | 'summaryChunkToQuestions'
  | 'summaryChunkToObjections',
  number
> = {
  transcriptChunkToSummary: 40000,
  summaryChunkToQuestions: 40000,
  summaryChunkToObjections: 50000,
}
