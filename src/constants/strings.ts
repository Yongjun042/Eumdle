export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['잘했어요!', '훌륭해요', '축하합니다!']
export const GAME_COPIED_MESSAGE = '클립보드에 복사되었습니다'
export const NOT_ENOUGH_LETTERS_MESSAGE = '음절이 부족합니다'
export const WORD_NOT_FOUND_MESSAGE = '없는 단어입니다'
export const HARD_MODE_ALERT_MESSAGE =
  '어려운 모드는 처음 시작할때만 설정할 수 있습니다!'
export const CORRECT_WORD_MESSAGE = (combined: string) =>
  `정답은 ${combined}였습니다`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess}를 ${position}에 입력해야 합니다`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter}를 포함해야 합니다`
export const ENTER_TEXT = '제출'
export const DELETE_TEXT = '삭제'
export const SPACE_TEXT = '공백'
export const STATISTICS_TITLE = '통계'
export const GUESS_DISTRIBUTION_TEXT = '시도횟수 분포'
export const NEW_WORD_TEXT = '새 단어까지'
export const SHARE_TEXT = '공유'
export const TOTAL_TRIES_TEXT = '총 도전 횟수'
export const SUCCESS_RATE_TEXT = '성공률'
export const CURRENT_STREAK_TEXT = '현재 연속 정답 횟수'
export const BEST_STREAK_TEXT = '최고 연속 정답 횟수'
