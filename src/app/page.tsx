// 더미 데이터 — 진짜 내용은 나중에 교체
const profile = {
  name: "주윤석",
  bio: "아주 천천히 그리고 조용한 투자자",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-foreground/20 px-6 py-10">
        <div
          aria-label="프로필 사진"
          className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 text-7xl font-bold text-white"
        >
          {profile.name[0]}
        </div>

        <h1 className="mt-8 text-xl font-semibold">{profile.name}</h1>
        <p className="mt-3 text-center text-sm text-foreground/70">
          {profile.bio}
        </p>

        <ul className="mt-8 flex w-full flex-col gap-5">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-foreground/30 px-4 py-4 text-center font-medium transition-colors hover:bg-foreground hover:text-background"
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
