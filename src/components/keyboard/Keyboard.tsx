import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT, SPACE_TEXT } from '../../constants/strings'
import { SHIFTWORD, KEYMAP } from '../../constants/alphabet'
type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else if (value === 'SPACE') {
      onChar(' ')
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else if (e.code === 'Space') {
        onChar(' ')
      } else {
        let key = e.key
        if (!SHIFTWORD.includes(key)) {
          key = key.toLowerCase()
        }
        if (
          key.length === 1 &&
          ((key >= 'a' && key <= 'z') || SHIFTWORD.includes(key))
        ) {
          onChar(KEYMAP[key])
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key
          width={65.4}
          value="SPACE"
          onClick={onClick}
          status={charStatuses[' ']}
        >
          {SPACE_TEXT}
        </Key>
        {['ㅒ', 'ㅖ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'].map(
          (key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          )
        )}
      </div>
      <div className="flex justify-center mb-1">
        {['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
