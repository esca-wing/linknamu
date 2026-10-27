import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

// 개발 모드의 핫 리로드에서 연결이 계속 늘어나지 않도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db().collection<{ _id: string; count: number }>("clicks");
}
