import MinionAvatar from "@/components/MinionAvatar";

// 더미 데이터 — 진짜 내용은 나중에 교체
const profile = {
  name: "주윤석",
  bio: "설비구매팀, 요즘에는 AI개발, 투자에 관심이 많아요",
};

const links = [
  { title: "깃허브", url: "https://github.com/esca-wing" },
  { title: "블로그", url: "https://blog.naver.com/navy_esca" },
  { title: "이메일", url: "mailto:esca.wing@gmail.com" },
];

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

        <ul className="mt-12 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                {...(link.url.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-center font-medium shadow-[0_8px_32px_rgba(120,70,40,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
