import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Extract the challenge query parameter from the request URL
  const url = new URL(request.url);
  const challenge = url.searchParams.get("challenge");

  console.log("challenge:", challenge);
  // Return the challenge parameter value in the response body
  if (challenge) {
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new NextResponse("Challenge parameter missing", {
    status: 400,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
