import { NextRequest, NextResponse } from 'next/server';
import { getAnalytics } from '../../../lib/supabase';

// GET /api/analytics - Get analytics data
export async function GET(request: NextRequest) {
  try {
    const analytics = await getAnalytics();
    
    return NextResponse.json({ analytics });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
