import React from 'react'
// skills에서 사용된 데이터 타입 변수 선언
interface Skill {
    id: number;
    title: string;
    isFront: boolean;
    content: string;
}

// 스킬과 객체를 저장할 배열
const skills: Skill[] = [
    { id: 1, title: "html", isFront: false, content: "홈페이지 구조" },
    { id: 2, title: "css", isFront: false, content: "홈페이지 디자인" },
    { id: 3, title: "js", isFront: true, content: "동적 움직임" },
    { id: 4, title: "react", isFront: true, content: "가상돔, 컴포넌트" },
]

// 자식 컴포넌트 매개변수 스킬 타입
interface SkillProps {
    skill: Skill
}

function SkillList({ skill }: SkillProps) {
    const { title, isFront, content } = skill;
    return (
        <div>
            <h2>과목 : {title}</h2>
            <p>파트 : {isFront ? "프론트엔드" : "퍼블리셔"}</p>
            <p>내용 : {content}</p>
        </div>
    )
}

export const PropsObjectArray2 = () => {
    return (
        <div>
            <h2>컴포넌트 합성</h2>
            {skills.map((s) => (
                <SkillList skill={s} />
            ))}
        </div>
    )
}
