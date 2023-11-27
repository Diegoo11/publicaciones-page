import { NextResponse } from 'next/server';
import dbConnect from '@/app/db/dbConnect';
import Article from '@/app/db/models/Article';

export async function GET(req) {
  await dbConnect();
  const q = req.nextUrl.searchParams.get('q');

  const results = await Article.find({
    title: new RegExp(q, 'i'),
  }).sort({ createdAt: -1 });

  return NextResponse.json({ results });
}
