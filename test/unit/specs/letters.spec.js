import * as LetterService from '@/services/letters'

describe('Letters Service', () => {
  it('should provide a string of letters', () => {
    expect(typeof LetterService.getLetters(3))
    .toEqual('string')
  })

  it('should provide requested number of letters', () => {
    expect(LetterService.getLetters(3).length).toEqual(3)
    expect(LetterService.getLetters(8).length).toEqual(8)
  })

  it('should provide at least one letter if not specified', () => {
    expect(LetterService.getLetters().length).toEqual(1)
  })

  it('should add letters as needed', () => {
    expect(LetterService.setLetters('A', 3)).toEqual(expect.stringMatching(/A[A-Z]{2}/))
    expect(LetterService.setLetters('ABC', 4)).toEqual(expect.stringMatching(/ABC[A-Z]{1}/))
    expect(LetterService.setLetters('ABCDE', 8)).toEqual(expect.stringMatching(/ABCDE[A-Z]{3}/))
    expect(LetterService.setLetters('ABC', 4)).toEqual(expect.stringMatching(/ABC[A-Z]{1}/))
  })

  it('should remove letters as needed', () => {
    expect(LetterService.setLetters('ABC', 1)).toEqual(expect.stringMatching(/A/))
    expect(LetterService.setLetters('ABCDEF', 3)).toEqual(expect.stringMatching(/ABC/))
  })

  it('should not remove letters if only one is left', () => {
    expect(LetterService.setLetters('ABC', 0)).toEqual(expect.stringMatching(/A/))
  })
})
