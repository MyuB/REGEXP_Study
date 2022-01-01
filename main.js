const str = `
010-1234-5678
theiejo@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
`

//const regexp = new RegExp('the', 'gi')
let regexp = /the/gi
console.log(str.match(regexp))

regexp = /fox/gi
console.log(regexp.test(str))

console.log(str.replace(regexp, 'AAA'))

regexp = /the/
console.log(str.match(regexp))

regexp = /the/g
console.log(str.match(regexp))

regexp = /the/gi
console.log(str.match(regexp))

console.log(str.match(/\.$/gim));

console.log(
  str.match(/d$/gm)
)

console.log(
  str.match(/^t/gim)
)

console.log(
  str.match(/./g)
)

console.log(
  str.match(/h..p/g)
)

console.log(
  //g 옵션이 없으면 먼저 찾아지는 것만 반환
  str.match(/fox|dog/)
)

console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/g)
)

console.log(
  str.match(/d{2,}/g)
)

console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[fox]/g)
)

console.log(
  str.match(/[0-9]/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)

console.log(
  str.match(/\d/g)
)

const h = `  the hello world  !

`
console.log(
  h.replace(/\s/g, '')
)

const str1 = `
010-1234-5678
theiejo@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`

console.log(
  str1.match(/.{1,}(?=@)/g)
)

console.log(
  str1.match(/(?<=@).{1,}/g)
)