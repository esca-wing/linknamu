import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { linkIds } from "@/lib/links";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수 조회 — { github: 42, blog: 3, email: 0 }
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find({ _id: { $in: linkIds } }).toArray();
    const counts = Object.fromEntries(linkIds.map((id) => [id, 0]));
    for (const doc of docs) counts[doc._id] = doc.count;
    return NextResponse.json(counts);
  } catch {
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}

// 클릭 수 1 증가 — body: { id: "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !linkIds.includes(id)) {
    return NextResponse.json({ error: "잘못된 링크" }, { status: 400 });
  }

  try {
    const collection = await getClicksCollection();
    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch {
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
