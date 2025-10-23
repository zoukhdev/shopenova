'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function TestAuthPage() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testSignup = async () => {
    setLoading(true);
    setResult('Testing signup...\n');
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'test@example.com',
        password: 'testpassword123',
        options: {
          data: {
            first_name: 'Test',
            last_name: 'User'
          }
        }
      });

      if (error) {
        setResult(prev => prev + `❌ Signup error: ${error.message}\n`);
      } else {
        setResult(prev => prev + `✅ Signup successful: ${data.user?.email}\n`);
      }
    } catch (error) {
      setResult(prev => prev + `❌ Unexpected error: ${error}\n`);
    } finally {
      setLoading(false);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    setResult(prev => prev + 'Testing login...\n');
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'test@example.com',
        password: 'testpassword123'
      });

      if (error) {
        setResult(prev => prev + `❌ Login error: ${error.message}\n`);
      } else {
        setResult(prev => prev + `✅ Login successful: ${data.user?.email}\n`);
      }
    } catch (error) {
      setResult(prev => prev + `❌ Unexpected error: ${error}\n`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Supabase Auth Test</h1>
      
      <div className="space-y-4">
        <button
          onClick={testSignup}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Test Signup
        </button>
        
        <button
          onClick={testLogin}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Test Login
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
