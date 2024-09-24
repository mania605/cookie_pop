/*
	문자열.indexOf('찾을 문자열') : 전체문자열에서 찾을 문자열이 위치해있는 순서값 반환, 
	만약 전체문자열에서 찾을 문자열이 없으면 -1을 반환

	1. 모달의 닫기 버튼 클릭시 모달 안보이게 하기
	2. 체크박스 선택한 뒤 닫기버튼 클릭시 모달 안보이게 함과 동시에 today=done쿠키를 하루만료기한 생성
	3. 스크립트가 처음 로딩될떄 조건문으로 today=done이라는 쿠키가 있으면 팝업안보이게 처리 없으면 보이게처리
*/

const [btnView, btnSet, btnDel] = document.querySelectorAll("button");///document.querySelectorAll("button")을 통해 HTML 문서에서 모든 button 요소를 선택하고, 이를 btnView, btnSet, btnDel라는 세 개의 변수에 할당. 각 버튼은 순서대로 저장.
const modal = document.querySelector("aside");
///modal 변수는 문서 내에서 aside 요소를 선택하여 저장. 보통 팝업 창이나 모달 창을 나타내기 위해 사용.
const btnClose = modal.querySelector("button");
///btnClose 변수는 modal 요소 내에서 button을 찾아 할당. 모달 창을 닫는 역할을 하는 버튼.
const ck = modal.querySelector("#ck");
/// ck 변수는 모달 안에 있는 #ck라는 ID를 가진 체크박스 요소를 선택하여 저장





//스크립트 실행되자마자 today=done이라는 쿠키 문자값이 전체 쿠키값에서 있는지 없는지 확인
const isCookie = document.cookie.indexOf("today=done");
console.log(isCookie); // -1이면 쿠키없음 그 외의 숫자는 쿠키 있음.
/// 특정 쿠키 값이 있는지 확인하고, 그에 따라 모달 창의 표시 여부를 결정하는 스크립트
///isCookie 변수: document.cookie.indexOf("today=done")로 현재 브라우저에 today=done이라는 쿠키가 존재하는지 확인. 값이 -1이면 쿠키가 없고, 0 이상의 값이면 쿠키가 존재


//isCookie값이 음수면 쿠키가 없는것 양수면 쿠키있음
if (isCookie < 0) {
	modal.style.display = "block";
} else {
	modal.style.display = "none";
}

btnView.addEventListener("click", () => {
	console.log(document.cookie);
}); ///btnView 버튼: 클릭 시 document.cookie를 콘솔에 출력해, 브라우저에 저장된 쿠키 값을 확인

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
}); ///btnSet 버튼: 클릭 시 setCookie() 함수를 호출하여, today=done이라는 쿠키를 생성하며, 이 쿠키는 1일 동안 유효

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
});

//닫기 버튼 클릭시 모달 안보임 처리
btnClose.addEventListener("click", () => {
	console.dir(ck); //해당 구문으로 확신시 checked는 프로퍼티가 true면 체크된 상태, false면 체크안된상태
	//닫기 버튼 클릭시 체크박스가 체크되어 있으면 쿠키생성
	if (ck.checked) setCoockie("today", "done", 1);
	modal.style.display = "none";
});



//쿠키 생성 함수
function setCookie(name, value, day) {
	let now = new Date();
	let duedate = now.getTime() + day * 1000 * 60 * 60 * 24;

	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}

//미션 - 웹 페이지 새로 고침시 today=done이라는 쿠키가 있으면 팝업 스타일 none처리해서 숨김
//없으면 팝업 스타일 block처리해서 보임 처리
//문자열.indexOf('찾을문자열') 구문으로 특정 쿠키 있는지 없는지 확인 가능
//step1 - 스크립트 실행되자 마자 document.cookie.indexOf('today=done') 구문을 이용해서 순서값을 반환
//step2 - 쿠키에 해당하는 문자열이 있으면 0이상의 숫자 반환, -1이라는 음수가 반환
//step3- 위의 결과값을 조걱식 처림 indexOf() < 0 (쿠키가 없다라는 조건식)
//step4 - modal.style.display = 'none' 안보이게 처림 (쿠키 있을때)
//step5 = modal.style.display = 'block' 보임처리 (쿠기 없을떄)


