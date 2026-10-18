import { NextRequest, NextResponse } from "next/server";

// Mock revalidation endpoint - no-op since using mock data
export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ revalidated: true });
}
