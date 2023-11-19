import { useRouter } from "next/router"

export default function BoardsPage(){
    const router = useRouter();
    return(
        <>
        <div>안녕하세요 게시판 상세 동적페이지 입니다   </div>
        <div>게시글 아이디 : {router.query.boardId}</div>
        </>
    )
}

// export const getServerSideProps = () =>{
    //만약 서버사이드 렌더링 하는 함수이다? => out 페이지로 생성 불가
    //                             => 이런경우 next.config.js 에서 exportPathMap으로 현재페이지 제외시키기
// }