/_ RestFul API 방식을 사용하지 않은 경우! _/
/ -> main
/join -> Join
/login -> Login
/search -> Search

/edit- user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video


/_ RestFul API 방식을 사용한 경우! _/

/ 글로벌 라우터 (전역요소에서 딱 한번씩만 사용됨)
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/ users로 시작하는 페이지 라우팅 => 라우터 필요
/users/edit -> Edit User
/users/delete -> Delete User

/ video로 시작하는 페이지 라우팅 => 라우터 필요
/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> Comment Video
/video/comments/delete -> Delete Comment