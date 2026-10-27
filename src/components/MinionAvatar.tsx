export default function MinionAvatar() {
  return (
    <svg
      role="img"
      aria-label="프로필 사진"
      viewBox="0 0 200 200"
      className="h-40 w-40 rounded-full shadow-[0_12px_40px_rgba(120,70,40,0.2)] ring-4 ring-white/70"
    >
      <rect width="200" height="200" fill="#FFD93B" />
      {/* 멜빵바지 */}
      <path d="M0 165 Q100 185 200 165 V200 H0 Z" fill="#3B6FB6" />
      {/* 머리카락 */}
      <path
        d="M100 30 Q95 12 90 6 M100 30 Q100 10 100 2 M100 30 Q105 12 112 8"
        stroke="#2B2B2B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* 고글 밴드 */}
      <rect x="0" y="68" width="200" height="14" fill="#3A3A3A" />
      {/* 고글 테두리 */}
      <circle cx="100" cy="75" r="40" fill="#B8BCC4" stroke="#7D838D" strokeWidth="6" />
      {/* 눈 */}
      <circle cx="100" cy="75" r="31" fill="#FFFFFF" />
      <circle cx="104" cy="77" r="14" fill="#7A4A21" />
      <circle cx="105" cy="77" r="7" fill="#1E1E1E" />
      <circle cx="108" cy="73" r="3" fill="#FFFFFF" />
      {/* 입 */}
      <path
        d="M70 130 Q100 158 130 130"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
