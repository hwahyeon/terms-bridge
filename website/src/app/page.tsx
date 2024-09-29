import Link from "next/link";
import { projectsList, rulesList, ListItem } from "@/data/main";
import { LinkButton } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        개발자를 위한 영어
        <div className="px-4 py-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
              프로젝트 목적
            </h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {projectsList.map((item: ListItem, index: number) => (
                <li key={index} className="mb-2">
                  {item.title && <strong>{item.title}:</strong>}{" "}
                  {item.description}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
              규칙
            </h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {rulesList.map((item: ListItem, index: number) => (
                <li key={index} className="mb-2">
                  {item.description}
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
          <LinkButton
            href="/docs"
            className="bg-foreground text-background hover:bg-[#999999] dark:hover:bg-[#ccc]"
          >
            보기
          </LinkButton>

          <LinkButton
            href="/contribution"
            className="border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
          >
            기여 가이드
          </LinkButton>
        </div>
      </main>
    </div>
  );
}
