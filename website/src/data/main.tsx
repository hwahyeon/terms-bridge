export interface ListItem {
  title?: string;
  description: React.ReactNode;
}

export const projectsList: ListItem[] = [
  {
    title: "영어 면접 준비",
    description:
      "면접에서 자주 등장하는 개발 관련 용어들을 빠르게 참조할 수 있습니다.",
  },
  {
    title: "국제적 소통 향상",
    description:
      "글로벌 개발 커뮤니티와의 소통 시 발생할 수 있는 언어 장벽을 낮춰줍니다.",
  },
  {
    title: "용어 혼동 방지",
    description:
      "한국어와 영어로 된 개발 문서를 읽을 때 용어의 혼동을 방지해 줍니다.",
  },
];

export const rulesList: ListItem[] = [
  {
    description: (
      <>
        한국어와 영어가 동일한 용어는 기재하지 않습니다.{" "}
        <span className="text-gray-300 italic">
          예) 머지(merge), 데이터베이스(Database)
        </span>
      </>
    ),
  },
  {
    description:
      "기술 용어뿐만 아니라 개발자 사이에서 사용되는 은어나 슬랭 따위도 등재합니다.",
  },
  {
    description: (
      <>
        더 자세한 사항은{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          CONTRIBUTING
        </code>{" "}
        문서를 참고해주세요.
      </>
    ),
  },
];
