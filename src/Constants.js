export const LEVELS = [
  "This person is hostile against Christianity.",
  "This person is not interested in faith or spirituality.",
  "This person is neutral in their spiritual walk. Neither open or closed to the idea of faith exploration.",
  "This person is open to the idea of faith exploration, but has reservations.",
  "This person is actively seeking and would like guidance.",
];

export const CONVERSATION_LEVELS = [
  "Didn't talk about faith",
  "Talked slightly about faith",
  "Talked a bit about faith",
  "Got to the Gospel",
  "Shared all of Gospel",
  "Shared and wants more!",
];

export const KEY_QUESTIONS = [
    "Are they open to prayer?",
    "Are they open to reading the Bible?",
    "Are they open to coming to church?",
    "Did they accept Christ?",
];

export const BACKGROUND_COLOR = '#F1F2F2';
export const ACTIVE_TINT_COLOR = '#2E3130';
export const INACTIVE_TINT_COLOR = '#F1F2F2';
export const DEFAULT_BLUE = "#4A90E2";

export const LEVEL_COLORS = [
  '#ED5555',
  '#F1B34E',
  '#EFDA5E',
  '#80E06C',
  '#30BE91',
];

export const CONVERSATION_COLORS = CONVERSATION_LEVELS.map(() => {
  return DEFAULT_BLUE;
});
