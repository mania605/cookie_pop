const [btnView, btnSet, btnDel] = document.querySelectorAll("button");

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
});

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
});

//쿠키 생성 함수
function setCookie(name, value, min) {
	let now = new Date();
	//아래와 같이 getTime으로 현재 시간값을 가져와서 초단위로 값을 변경하면, 잘못된 날짜 정보로 만료일 설정을 예방
	let duedate = now.getTime() + min * 1000 * 60;
	//쿠키값은 화면 새로고침되어야지만 갱신된값이 반영
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;

	min === 0 ? alert("쿠키 삭제") : alert("쿠키 생성");
}
