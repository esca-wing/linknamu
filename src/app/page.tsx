import LinkList from "@/components/LinkList";
import MinionAvatar from "@/components/MinionAvatar";
import { links } from "@/lib/links";

// 더미 데이터 — 진짜 내용은 나중에 교체
const profile = {
  name: "주윤석",
  bio: "설비구매팀, 요즘에는 AI개발, 투자에 관심이 많아요",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-sm flex-col items-center">
        <MinionAvatar />

        <h1 className="mt-8 text-2xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-balance text-center text-sm leading-relaxed text-foreground/60">
          {profile.bio}
        </p>

        <LinkList links={links} />
      </div>
    </main>
  );
}
