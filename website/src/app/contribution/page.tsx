import { LinkButton } from "@/components/ui/button";

export default function ContributionPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start max-w-[700px]">
        <h1 className="text-3xl">기여하기</h1>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-6">
          본 프로젝트에 관심을 가져주셔서 감사합니다!
          <br />
          기여하기 전에 다음 지침을 읽어주시기 바랍니다.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            기여 지침
          </h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <strong>한국어와 영어가 동일한 용어는 기재하지 않습니다.</strong>
              <p className="pl-4 text-gray-700 dark:text-gray-300">
                예를 들어, <i>pull request</i>는 한국에서도 <i>풀 리퀘스트</i>{" "}
                그대로 사용하므로 본 프로젝트에서는 다루지 않습니다.
              </p>
            </li>
            <li className="mb-2">
              <strong>
                기술 용어뿐만 아니라 개발자 사이에서 사용되는 은어나 슬랭 따위도
                등재합니다.
              </strong>
              <p className="pl-4 text-gray-700 dark:text-gray-300">
                단, 비하나 경멸의 의도를 가진 용어는 그 의도를 확실하게
                표기합니다. 예를 들어, <i>Code Monkey</i>는 비하의 의도로도
                사용되기에 용어의 부정적인 의도도 명확히 기재합니다.
              </p>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            커밋 메시지 가이드라인
          </h2>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-6">
            커밋 메시지는 다음과 같은 구조로 작성해 주세요.
          </p>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <strong>타입</strong>
              <p className="pl-4 pt-2 text-gray-700 dark:text-gray-300">
                커밋의 목적을 간단하게 나타냅니다. 본 프로젝트는 아래의 타입을
                사용하며, 타입은 모두 소문자를 사용합니다.
              </p>
              <ul className="list-disc pl-10 mt-2 text-gray-700 dark:text-gray-300">
                <li className="mb-2">add: 새로운 단어 혹은 설명 추가</li>
                <li className="mb-2">fix: 잘못된 정보의 수정, 오타 수정</li>
                <li className="mb-2">docs: 기타 문서 작업</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>제목(Subject)</strong>
              <p className="pl-4 py-2 text-gray-700 dark:text-gray-300">
                마침표는 사용하지 않습니다.
              </p>
            </li>
            <li className="mb-2">
              <strong>본문(Body) (선택적)</strong>
              <p className="pl-4 py-2 text-gray-700 dark:text-gray-300">
                제목으로 충분한 설명이 불가할 때 사용합니다. 어떻게
                변경했는지보다, 왜 변경했는지에 대해 설명합니다.
              </p>
            </li>
            <li className="mb-2">
              <strong>푸터(Footer) (선택적)</strong>
              <p className="pl-4 py-2 text-gray-700 dark:text-gray-300">
                이슈 트래커 ID나 참조된 이슈에 대한 정보를 작성합니다.
              </p>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            예시 커밋 메시지
          </h2>

          <div className="bg-gray-100 dark:bg-gray-800 text-sm font-mono p-4 rounded-md shadow-md text-left">
            <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <strong>fix: "변수" 단어 설명 수정</strong>
            </p>
            <br />
            <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              변수 단어에 대한 설명에 오류가 있어 수정하였음. (필수 아님)
            </p>
            <br />
            <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <i>Closes #123 </i>(필수 아님)
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            피드백과 제안
          </h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              프로젝트 개선을 위한 아이디어나 제안이 있으시면 언제든지 이슈를
              통해 공유해주세요.
            </li>
            <li className="mb-2">
              모든 피드백과 제안은 프로젝트에 큰 도움이 됩니다.
            </li>
          </ol>
        </section>

        <section className="flex items-center justify-center gap-4 flex-col sm:flex-row pb-8">
          <LinkButton
            href="/"
            className="bg-foreground text-background hover:bg-[#999999] dark:hover:bg-[#ccc]"
          >
            홈으로
          </LinkButton>

          <LinkButton
            href="/docs"
            className="border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
          >
            영어 단어 보기
          </LinkButton>
        </section>
      </main>
    </div>
  );
}
