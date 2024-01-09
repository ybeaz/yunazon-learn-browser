export enum TimeEstimationBotNameEnumType {
  transcriptChunkToSummary = 'transcriptChunkToSummary',
  summaryChunkToQuestions = 'summaryChunkToQuestions',
  summaryChunkToObjections = 'summaryChunkToObjections',
}

export const timeEstimationBots: Record<TimeEstimationBotNameEnumType, number> =
  {
    transcriptChunkToSummary: 60000,
    summaryChunkToQuestions: 90000,
    summaryChunkToObjections: 90000,
  }
