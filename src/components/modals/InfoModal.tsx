import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="즐기는 방법" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        2음절의 단어를 6번 안에 맞추세요. 단어를 입력하면 칸의 색으로 얼마나
        근접했는지 알려줍니다.<br></br> ㅗ+ㅏ=ㅘ ㄴ+ㅎ=ㄶ 와 같이 조합할 수
        있습니다. <br></br>종성이 없는 경우 공백으로 입력합니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㅊ"
          status="correct"
        />
        <Cell value="ㅐ" />
        <Cell value="ㄱ" />
        <Cell value="ㅈ" />
        <Cell value="ㅏ" />
        <Cell value="ㅇ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        'ㅊ' 이라는 글자는 올바른 위치에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㄱ" />
        <Cell
          value="ㅞ"
          isRevealing={true}
          isCompleted={true}
          status="present"
        />
        <Cell value=" " />
        <Cell value="ㅉ" />
        <Cell value="ㅏ" />
        <Cell value="ㄱ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        'ㅞ' 라는 글자는 단어 안에 존재하지만 다른 위치에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㅇ" />
        <Cell value="ㅜ" />
        <Cell value=" " />
        <Cell
          value="ㅈ"
          isRevealing={true}
          isCompleted={true}
          status="absent"
        />
        <Cell value="ㅜ" />
        <Cell value=" " />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        'ㅈ' 이라는 글자는 단어 안에 없습니다.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        이 놀이는{' '}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline font-bold"
        >
          워들
        </a>{' '}
        의 오픈소스 버전인{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          React-Wordle
        </a>{' '}
        을 포크해서 수정한 것입니다.
      </p>
    </BaseModal>
  )
}
