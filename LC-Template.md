<%*
// 1. 리트코드 URL 입력 받기
const url = await tp.system.prompt("리트코드 문제 URL을 입력하세요");
if (!url) return;

// 2. URL에서 문제 슬러그(slug) 추출
// 예: https://leetcode.com/problems/two-sum/ -> two-sum 추출
const slug = url.split('/problems/')[1].split('/')[0];

// 3. 슬러그를 읽기 좋은 이름으로 변환 (two-sum -> Two Sum)
const problemName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// 4. 폴더 경로 설정 (문제 이름으로 폴더 생성)
const path = `LeetCode-Solutions/${slug}`;

// 5. 폴더 생성
await app.vault.adapter.mkdir(path);

// 6. 파일들 생성
// README 생성 (주소 포함)
await tp.file.create_new(`---
link: ${url}
difficulty: 
topics: []
---
# ${problemName}

## 문제 설명
[LeetCode 문제 바로가기](${url})

## 풀이 전략
- `, "README", false, path);

// 솔루션 파일들 생성 (언어는 원하시는 대로 수정 가능)
await tp.file.create_new("# Solution 1", "Solution-1.py", false, path);
await tp.file.create_new("// Solution 2", "Solution-2.py", false, path);

%>
# ${problemName} 구조 생성 완료!

