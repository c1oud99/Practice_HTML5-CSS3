const blanks = []                            
const numbers = [2, 10, 7, 3.3]             
const classmates = ["철수", "영희", "훈이"]     

classmates.length          // 3

classmates[0]              // "철수"
classmates[1]              // "영희"

classmates.push("민지")     // ["철수", "영희", "훈이", "민지"]

classmates.pop()          // ["철수", "영희", "훈이"]

// 배열의 요소 정렬하기, 거꾸로 뒤집기 _ sort
classmates.sort()               // ["영희", "철수", "훈이"]

classmates.includes("철수")     // true
classmates.includes("영구")     // false
