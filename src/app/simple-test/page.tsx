'use client';

import { useState, useEffect } from 'react';

export default function SimpleTestPage() {
  const [result, setResult] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Simple Supabase Test</h1>
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const testSupabase = async () => {
    setResult('Testing Supabase connection...\n');
    
    try {
      // Test if we can import and use Supabase
      const { supabase } = await import('../../lib/supabase');
      
      setResult(prev => prev + '✅ Supabase client loaded successfully\n');
      
      // Test a simple query
      const { data, error } = await supabase.from('products').select('count').limit(1);
      
      if (error) {
        setResult(prev => prev + `❌ Database error: ${error.message}\n`);
      } else {
        setResult(prev => prev + '✅ Database connection successful\n');
      }
      
    } catch (error) {
      setResult(prev => prev + `❌ Error: ${error}\n`);
    }
  };

  const testAuth = async () => {
    setResult(prev => prev + 'Testing authentication...\n');
    
    try {
      const { supabase } = await import('../../lib/supabase');
      
      const { data, error } = await supabase.auth.signUp({
        email: 'test@example.com',
        password: 'testpassword123'
      });
      
      if (error) {
        setResult(prev => prev + `❌ Auth error: ${error.message}\n`);
      } else {
        setResult(prev => prev + `✅ Auth signup successful: ${data.user?.email}\n`);
      }
      
    } catch (error) {
      setResult(prev => prev + `❌ Auth error: ${error}\n`);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Simple Supabase Test</h1>
      
      <div className="space-y-4">
        <button
          onClick={testSupabase}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Test Database Connection
        </button>
        
        <button
          onClick={testAuth}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Test Authentication
        </button>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Results:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          {result || 'Click buttons to test...'}
        </pre>
      </div>
    </div>
  );
}
