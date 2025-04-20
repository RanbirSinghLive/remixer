import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRemix = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement OpenAI API call
      console.log('Remixing text:', inputText);
      // Simulate API call
      setTimeout(() => {
        setOutputText('This is a simulated remix of your text. API integration coming soon!');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error remixing text:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold text-center mb-8">Content Remixer</h1>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Input Text</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    rows={6}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your text here..."
                  />
                </div>

                <div className="flex justify-center mb-6">
                  <button
                    onClick={handleRemix}
                    disabled={isLoading || !inputText}
                    className={`flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                      isLoading || !inputText
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <ArrowPathIcon className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Remixing...
                      </>
                    ) : (
                      'Remix Content'
                    )}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Output</label>
                  <div className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 min-h-[200px]">
                    {outputText || 'Your remixed content will appear here...'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
